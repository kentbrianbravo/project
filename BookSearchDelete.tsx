import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const BookSearchDelete = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter Book Year to Search" />
      <TouchableOpacity
        // onPress={Search function}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Search</Text>
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

export default BookSearchDelete;
