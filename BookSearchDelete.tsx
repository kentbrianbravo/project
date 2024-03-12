import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import {
  FlatList,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert} from 'react-native';
import { RootStackParamList } from './App';
import { Book } from './BookAdd';
import {useState, useContext} from 'react';
import { BookContext } from "./BookContext";


type BookSearchDeleteProps = StackScreenProps<RootStackParamList, 'BookSearchDelete'>;


const BookSearchDelete = ({route, navigation} : BookSearchDeleteProps) => {

  const [books, setBooks] = useContext(BookContext);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchBooks, setSearchBooks] = useState('');


  // const books = [
  //   {title: 'Book 1', author: 'Author 1', date: 2000},
  //   {title: 'Book 2', author: 'Author 2', date: 2000},
  //   {title: 'Book 3', author: 'Author 3', date: 2001},
  // ];

  // useEffect(() => {
    
  // },[books]);

  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.date.toString().includes(searchBooks)
      )
    );
  }, [books]);


  const displayBookTitle = ({item}: {item: Book}) => (
    <View style={styles.bookItem}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Button
        title="View Details"
        onPress={() =>
          navigation.navigate('BookDetails', {
            title: item.title,
            author: item.author,
            date: item.date,
          })
        }
      />
      <Button
        title="Remove"
        onPress={() => {removeBook(item.date)
        }}
      />
    </View>
  );


  const displayFilteredBooks = () => {
    const newFilteredBooks = books.filter(book =>
      book.date.toString().includes(searchBooks)
    );
    setFilteredBooks(newFilteredBooks);
  };

  const removeBook = (date: number) => {
    setBooks(books => books.filter(book => book.date !== date));
    // Alert.alert('Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Book</Text>
      <TextInput style={styles.input} placeholder="Enter Book Year to Search" value={searchBooks} onChangeText={setSearchBooks}/>
      
      <FlatList
        data=
        {filteredBooks.sort((bookA, bookB) => {
          if (bookA.title.toLowerCase() === bookB.title.toLowerCase()) {
            return bookB.date - bookA.date; 
          }
          return bookA.title.toLowerCase().localeCompare(bookB.title.toLowerCase()); 
        })}
        renderItem={displayBookTitle}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        // onPress={Search function}
        onPress={displayFilteredBooks}
        style={styles.buttonContainer}>        
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 24,
    // marginTop: 20,
    // paddingHorizontal: 20,
    // alignSelf: 'center',
  },
  input: {
    // flex: 1,
    // height: ,
    width: '100%',
    // margin: 12,
    borderWidth: 1,
    marginBottom: 24,
    marginTop: 8,
    // padding: 5,
    textAlign: 'left',
    padding: 4,
    paddingVertical: 8
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
  },
  // buttonContainer: {
  //   backgroundColor: '#515151',
  //   borderRadius: 5,
  //   paddingVertical: 10,
  //   paddingHorizontal: 10,
  //   margin: 10,
  //   // marginTop: '100%',
  //   // marginHorizontal: 20,
  //   // position: 'absolute',
  //   top: '70%',
  //   alignContent: 'center'
  // },
  buttonContainer: {
    backgroundColor: '#515151',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  bookItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookSearchDelete;
