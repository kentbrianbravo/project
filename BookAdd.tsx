import React from 'react';
import {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

type Book = {
  title: string;
  author: string;
  date: number;
};

const BookAdd = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  // const navigation = useNavigation();

  const addBook = () => {
    if (title === '' || author === '' || year === '') {
      Alert.alert(`Please fill up all fields`);
    } else {
      const newBook: Book = {title, author, date: parseInt(year)};
      setBooks(currentBooks => [...currentBooks, newBook]);
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
    marginTop: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
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
