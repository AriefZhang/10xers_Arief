import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screen/Home'
import CollectionDetails from './screen/CollectionDetails'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={CollectionDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
