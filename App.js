import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-Navigation/native';
import {createStack} from '@react-Navigation/native';

import HomeScreen from "./screens/Home";
import StarMapsScreen from "./screens/StarMap";
import SpaceCraftsScreen from "./screens/SpaceCraft";
import DailyPicsScreen from "./screens/DailyPic";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'  screenOptions={{
      headerShown:false
    }}>

    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='StarMap' component={StarMapScreen}/>
    <Stack.Screen name='DailyPic' component={DailyPicScreen}/>
    <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen}/>

    </Stack.Navigator>
   </NavigationContainer>
  );
}


