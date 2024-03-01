import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const BookSearchDelete = () => {
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search Book" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: '90%',
  },

});

export default BookSearchDelete;