import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import type {NativeStackScreenProps} from '@react-navigation/stack';
// import BookApp from './BookApp';
import BookList from './BookList';
import BookSearchDelete from './BookSearchDelete';
import BookAdd from './BookAdd';
import BookDetails from './BookDetails';

export type RootStackParamList = {
  BookList: undefined;
  BookSearchDelete: undefined;
  BookAdd: undefined;
  BookDetails: {
    title: string;
    author: string;
    date: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="BookSearchDelete" component={BookSearchDelete} />
        <Stack.Screen name="BookAdd" component={BookAdd} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
