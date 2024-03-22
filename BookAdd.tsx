import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {useState, useContext} from 'react';
import { BookContext } from "./BookContext";


import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import { RootStackParamList } from './App';

export type Book = {
  title: string;
  author: string;
  date: number;
};

type BookAddProps = StackScreenProps<RootStackParamList, 'BookAdd'>;

const BookAdd = ({navigation}:BookAddProps ) => {

  const [books, setBooks] = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const addBook = () => {
    if (title === '' || author === '' || year === '') {
      Alert.alert(`Please fill up all fields`);
    } else {
      const newBook: Book = {title, author, date: parseInt(year)};
      setBooks(books => [...books, newBook]);

      Alert.alert(`successfully added book with Title: ${title}`);
      setTitle('');
      setAuthor('');
      setYear('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title:"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.text}>Author</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Author: "
        value={author}
        onChangeText={setAuthor}
      />
      <Text style={styles.text}>Date</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Year: "
        value={year}
        onChangeText={setYear}
      />
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
    elevation: 10,
    backgroundColor: '#515151',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 50,
    margin: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default BookAdd;
