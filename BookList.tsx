import React from 'react';
import { FlatList, Text, View,Button, StyleSheet } from 'react-native';

type Book = {
  title: string;
  author: string;
  date: number;
};

const BookList = ({ navigation } : {navigation : any}) => {

  const books = [
    { title: 'Book 1', author: 'Author 1' , date : 2000},
    { title: 'Book 2', author: 'Author 2' , date: 2000},
    { title: 'Book 3', author: 'Author 3' , date: 2001},
  ];

  const displayBookTitle = ({ item }:{ item:any }) => (
    <View style={styles.bookItem}>
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate("Book Details", { title: item.title, author: item.author, date: item.date })}
      />
    </View>
    
  );

  const searchDeleteBooks = () => {
    navigation.navigate("Search and Delete Books");
  };

  const addBook = () => {
    navigation.navigate("Add Books");
  };


  
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={displayBookTitle}
        keyExtractor={(item) => item.title }
      />

      <Button
      title="Search & Delete Books"
      onPress={() => searchDeleteBooks()}
      />

      <Button
      title="Add Book"
      onPress={() => addBook()}
      />
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
    alignItems: 'center'
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default BookList;