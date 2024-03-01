import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';


const BookAdd = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Title" />
      <TextInput style={styles.input} placeholder="Author" />
      <TextInput style={styles.input} placeholder="Date" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },

});

export default BookAdd;