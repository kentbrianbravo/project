import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import {
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { RootStackParamList } from './App';


type BookSearchDeleteProps = StackScreenProps<RootStackParamList, 'BookSearchDelete'>;


const BookSearchDelete = ({route, navigation} : BookSearchDeleteProps) => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter Book Year to Search" />

      {/* <FlatList
        data={books}
        renderItem={displayBookTitle}
        keyExtractor={item => item.title}
      /> */}

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
    marginHorizontal: 24,
    marginVertical: 24,
    // marginTop: 20,
    // paddingHorizontal: 20,
    // alignSelf: 'center',
  },
  input: {
    // flex: 1,
    // height: ,
    width: '100%',
    // margin: 12,
    borderWidth: 1,
    marginBottom: 24,
    marginTop: 8,
    // padding: 5,
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
    // marginTop: '100%',
    // marginHorizontal: 20,
    // position: 'absolute',
    top: '70%',
    alignContent: 'center'
 
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
