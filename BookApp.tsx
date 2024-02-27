import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

type Book = {
  title: string;
  author: string;
  date: number;
};

const BookApp = () => { 
  const [command, setCommand] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [removeYear, setRemoveYear] = useState<string>('');
  const [filterYear, setFilterYear] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);


  const addBook = () => {
    const newBook: Book = { title, author, date: parseInt(year)};
    setBooks(currentBooks => [...currentBooks, newBook]);
    setTitle('');
    setAuthor('');
    setYear('');
    setCommand(''); 
  };

  const addBookInputs = () => (
    <View>
      <TextInput style={styles.input} placeholder="Enter Book Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Enter Book Author" value={author} onChangeText={setAuthor} />
      <TextInput style={styles.input} placeholder="Enter Book Year" value={year} onChangeText={setYear} keyboardType="numeric" />
      <Button title="Add Book" onPress={addBook} />
    </View>
  );


  const removeBooks = () => {
    let filteredBooks = books.filter(book => book.date.toString() !== removeYear);
    setBooks(filteredBooks);
    setRemoveYear(''); 
    setCommand(''); 
  };
  
  const removeBooksInput = () => (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Year of Book to Remove"
        value={removeYear}
        onChangeText={setRemoveYear}
        keyboardType="numeric"
      />
      <Button title="Remove Books" onPress={removeBooks} />
    </View>
  );

  const searchBook = () => {
    let newSavedBook = books.filter((existingBook) => existingBook.date === parseInt(filterYear));

    if (newSavedBook.length === 0) {
      Alert.alert(`No book is found for year ${filterYear}`);
      setFilteredBooks([]);
    } else {
      setFilteredBooks(newSavedBook);
    }
    setFilterYear('');
    // setCommand(''); 
  };

  const searchBookInput = () => (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Year of Book to search ex: 2024"
        value={filterYear}
        onChangeText={setFilterYear}
        keyboardType="numeric"
      />
      <Button title="Search Book/s" onPress={searchBook} />
      {command === '1' && addBookInputs()}

      <FlatList
    data={filteredBooks.sort((a, b) => {
      if (a.title.toLowerCase() === b.title.toLowerCase()) {
        return b.date - a.date; 
      }
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase()); 
    })}
    keyExtractor={(item, index) => item.title + index}
    renderItem={({ item }) => (
      <Text style={styles.bookItem}>{item.title} by {item.author} ({item.date})</Text>
    )}
    contentContainerStyle={{ flexGrow: 1}}
  />
    </View>
  );

  
  const displayBooks = () => (
    <FlatList
    data={books.sort((a, b) => {
      if (a.title.toLowerCase() === b.title.toLowerCase()) {
        return b.date - a.date; 
      }
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase()); 
    })}
    keyExtractor={(item, index) => item.title + index}
    renderItem={({ item }) => (
      <Text style={styles.bookItem}>{item.title} by {item.author} ({item.date})</Text>
    )}
  />
  );


  return (
    <View style={styles.container}>
      <Text>Welcome to the Library!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter command (1-add, 2-remove, 3-search, 4-display)"
        value={command}
        onChangeText={ (test1 :string) => {
          setCommand(test1);
         }
        }
      />
      {command === '1' && addBookInputs()}
      {command === '2' && removeBooksInput()}
      {command === '3' && searchBookInput()}
      {command === '4' && displayBooks()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  bookItem: {
    padding: 10,
    fontSize: 16,
  },
});

export default BookApp;
