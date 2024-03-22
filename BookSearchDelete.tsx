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

  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
        book.date.toString().includes(searchBooks)
      )
    );
  }, [books]);


  const displayBookTitle = ({item,index}: {item: Book, index: number}) => (
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
        onPress={() => {removeBook(index)}}
      />
    </View>
  );


  const displayFilteredBooks = () => {
    const newFilteredBooks = books.filter(book =>
      book.date.toString().includes(searchBooks)
    );
    setFilteredBooks(newFilteredBooks);
  };

  const removeBook = (index: number) => {
    setBooks(prevBooks => {
      const updatedBooks = [...prevBooks];
      updatedBooks.splice(index, 1);
      return updatedBooks;
    });
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
        keyExtractor={(item,index) => index.toString()}
      />
      <TouchableOpacity
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
  },
  input: {
    width: '100%',
    borderWidth: 1,
    marginBottom: 24,
    marginTop: 8,
    textAlign: 'left',
    padding: 4,
    paddingVertical: 8
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
  },
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
