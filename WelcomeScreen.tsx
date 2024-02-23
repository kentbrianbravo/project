import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  // const [username, setUsername] = useState('');
  // const [command, setCommand] = useState('');
  const [command, setCommand] = useState('');
  const [book, setBook] = useState({ title: '', author: '', year: '' });

  const handleMenu = (input) => {
    if (input === '1') {
      setCommand(true);
    } 
    else if (input === '5'){
      
    } 
    else {
      // Handle other menu options if needed
    }
  };

  const handleAddingBook = () => {
    if (book.title === '' || book.author === '' || book.year === '') {
      alert('Please fill in all fields');
    } else {
      // Here you can handle adding the book, for now just log the book details
      console.log('Added book:', book);
      // setCommand(false);
      setBook({ title: '', author: '', year: '' }); // Reset book state
    }
  };

  return (
    <View style={styles.container}>
      {!command ? (
        <View>
          <Text style={styles.menuText}>1-add</Text>
          <Text style={styles.menuText}>2-remove</Text>
          <Text style={styles.menuText}>3-search,</Text>
          <Text style={styles.menuText}>4 print</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter a number for operation to do"
            onChangeText={handleMenu}
            value={command}
            keyboardType="numeric"
          />
        </View>
      ) : (
        <View>
          <Text style={styles.menuText}>Add a Book:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            onChangeText={(text) => setBook({ ...book, title: text })}
            value={book.title}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter author"
            onChangeText={(text) => setBook({ ...book, author: text })}
            value={book.author}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter year"
            onChangeText={(text) => setBook({ ...book, year: text })}
            value={book.year}
            keyboardType="numeric"
          />
          <Button title="Add Book" onPress={handleAddingBook} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 30,
  },
  menuText: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'normal',
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'center'
  },
});

export default WelcomeScreen;
