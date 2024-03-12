import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { View } from "react-native-reanimated/lib/typescript/Animated";


const Test = () => {
  const [area, setArea] = useState([10,20,30]);
  const [count, setCount] = useState(0);


  //used to memoize expensive calculations so that they are only 
  //recomputed when one of the dependencies passed in the dependency array changes
  //useMemo
  const displaySearch = useMemo(() => {
    console.log(`New value is: ${count}`);
  },[count]);


  //used to memoize functions so that they are only recreated if one of the 
  //dependencies passed in the dependency array changes
  //useCallback
  const handleSearch = useCallback((adding) => {
    console.log(area);
    setArea([50 + adding,10 + adding,20 + adding]);
  },[area]);

  
  //Side effects of state changing

  //used for handling side effects in functional components. 
  //Side effects can include anything that needs to happen in your component that 
  //isn't related to rendering

  //useEffect
  useEffect(() => {
    //code

    //optional return function
    return () => {
      console.log('executes before destroying and rerunning the new value');
    }
  },[]);

  //any piece of information that can change overtime across renders
  //used when you need to add state management to functional components.
  //useState

  return (
    <View>
      //useMemo
      <Button onPress={()=> {setCount(count + 1)}} title='Increment +1'/>
      //useCallback
      <TextInput onChange={() => {handleSearch(10)}} placeholder='Enter new string here:'/>
    </View>
  )
}

export default Test;