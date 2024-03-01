import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import BookApp from './BookApp';
import BookList from './BookList';
import BookSearchDelete from './BookSearchDelete';
import BookAdd from './BookAdd';
import BookDetails from './BookDetails';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Book List">
        <Stack.Screen name="Book List" component={BookList}/>
        <Stack.Screen name="Search and Delete Books" component={BookSearchDelete}/>
        <Stack.Screen name="Add Books" component={BookAdd}/>
        <Stack.Screen name="Book Details" component={BookDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;