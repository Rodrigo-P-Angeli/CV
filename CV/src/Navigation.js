import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from '../App'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarLabel={{size = 30}}>
        <Tab.Screen name="Home" component={App} />
        <Tab.Screen name="Settings" component={App} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}