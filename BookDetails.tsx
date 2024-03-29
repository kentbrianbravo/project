import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {View, Text, StyleSheet} from 'react-native';

// type BookDetailsProps = {
//   route: {
//     params: {
//       title: string;
//       author: string;
//       date: number;
//     };
//   };
// };

type BookDetailsProps = StackScreenProps<RootStackParamList, 'BookDetails'>;

const BookDetails = ({route}: BookDetailsProps) => {
  const {title, author, date} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title: {title}</Text>
      <Text style={styles.text}>Author: {author}</Text>
      <Text style={styles.text}>Date: {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default BookDetails;
