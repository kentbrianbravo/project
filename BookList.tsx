import React, { useCallback, useEffect, useMemo, useState, useContext } from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Book } from './BookAdd';
import { BookContext } from "./BookContext";




type BookListProps = StackScreenProps<RootStackParamList, 'BookList'>;

const BookList = ( {route,navigation}: BookListProps) => {
  // const [books, setBooks] = useState<Book[]>([]);

  // const books = [
  //   {title: 'Book 1', author: 'Author 1', date: 2000},
  //   {title: 'Book 2', author: 'Author 2', date: 2000},
  //   {title: 'Book 3', author: 'Author 3', date: 2001},
  // ];

  const [books] = useContext(BookContext);



  // const param = route.params;
  
  // useEffect(() => {

  //   const book = param?.book
  //   if(book){
  //     setBooks(currentBooks => [...currentBooks,book])
  //   }
  // },[param?.book])

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
    </View>
  );
  // const [number, setNumber] = useState(10)

  // const test = useCallback(() => {
  //   const calc = number + 20;
  // },[]);

  // const test1 = useMemo(() => {
  //   const calc = number + 20;
  // },[]);


  

  const searchDeleteBooks = () => {
    navigation.navigate('BookSearchDelete');
  };

  const addBook = () => {
    navigation.navigate('BookAdd');
  };

  return (

    <View style={styles.container}>
      <FlatList
        data=
        {books.sort((bookA, bookB) => {
          if (bookA.title.toLowerCase() === bookB.title.toLowerCase()) {
            return bookB.date - bookA.date; 
          }
          return bookA.title.toLowerCase().localeCompare(bookB.title.toLowerCase()); 
        })}
        renderItem={displayBookTitle}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* <Button
      title="Search & Delete Books"
      onPress={() => searchDeleteBooks()}
      /> */}

      <TouchableOpacity
        onPress={() => searchDeleteBooks()}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Search & Delete Books</Text>
      </TouchableOpacity>

      {/* <Button 
      title="Add Book" onPress={() => addBook()} 
      /> */}

      <TouchableOpacity
        onPress={() => addBook()}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
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
  buttonContainer: {
    // elevation: 10,
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
});

export default BookList;
