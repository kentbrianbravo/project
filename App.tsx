import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookList from './BookList';
import BookSearchDelete from './BookSearchDelete';
import BookAdd, { Book } from './BookAdd';
import BookDetails from './BookDetails';
import { BookProvider } from './BookContext';



export type RootStackParamList = {
  BookList: undefined;
  BookSearchDelete: undefined;
  BookAdd: undefined;
  BookDetails: 
  {
    title?: string;
    author?: string;
    date?: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <BookProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookList">
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="BookSearchDelete" component={BookSearchDelete} />
        <Stack.Screen name="BookAdd" component={BookAdd} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </BookProvider>
  );
};

export default App;
