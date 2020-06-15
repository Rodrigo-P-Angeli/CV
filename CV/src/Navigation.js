import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './Screens/Profile'
import Formacao from './Screens/Formacao'
import Experience from './Screens/Experience'
import Conhecimentos from './Screens/Conhecimentos'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
  state = {
    nome: 'Rodrigo'
  }
  bottomTab() {
    return (
      <Tab.Navigator initialRouteName="Perfil">
        <Tab.Screen name="Perfil" component={Profile} />
        <Tab.Screen name="Formação Acadêmica" component={Formacao} />
        <Tab.Screen name="Experiêcias" component={Experience} />
        <Tab.Screen name="Conhecimentos" component={Conhecimentos} />
      </Tab.Navigator>
    )
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={this.bottomTab} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}