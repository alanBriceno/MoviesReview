import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from '../scenes/DetailScreen';
import HomeScreen from '../scenes/HomeScreen';
import WebViewScreen from '../scenes/WebViewScreen';

const Stack = createStackNavigator();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Movies" component={HomeScreen} />
    <Stack.Screen
      name="Review"
      options={{
        title: '',
      }}
      component={DetailScreen}
    />
    <Stack.Screen
      name="WebView"
      options={{
        title: '',
      }}
      component={WebViewScreen}
    />
  </Stack.Navigator>
);

export default Navigation;
