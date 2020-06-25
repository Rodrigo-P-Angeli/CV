import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Profile from './Screens/Profile'
import Formacao from './Screens/Formacao'
import Experience from './Screens/Experience'
import Conhecimentos from './Screens/Conhecimentos'
import MenuDrawer from './Components/MenuDrawer'
import Certificates from './Screens/Certificates'
import Motivation from './Screens/Motivation'
import OtherJobs from './Screens/OtherJobs'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default class Navigation extends Component {
  state = {
    nome: 'Rodrigo'
  }
  bottomTab() {
    return (
      <Tab.Navigator initialRouteName="Perfil" tabBarOptions={tabBar} backBehavior={'initialRoute'}>
        <Tab.Screen
          name="Perfil"
          component={Profile} options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="person" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Formação Acadêmica"
          component={Formacao}
          options={{
            tabBarLabel: 'Formação',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="book-reader" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Experiêcias"
          component={Experience}
          options={{
            tabBarLabel: 'Experiêcias',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="work" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Conhecimentos"
          component={Conhecimentos}
          options={{
            tabBarLabel: 'Conhecimentos',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="all-inclusive" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    )
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='CV'
          drawerContent={props => <MenuDrawer {...props} />}
          drawerContentOptions={drawerOptions}
          backBehavior={'initialRoute'}>
          <Drawer.Screen name="CV" component={this.bottomTab} />
          <Drawer.Screen name="Introdução" component={Motivation} />
          <Drawer.Screen name="Certificados" component={Certificates} />
          <Drawer.Screen name="Outros Trabalhos" component={OtherJobs} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}


const tabBar = {
  activeTintColor: 'black',
  inactiveTintColor: '#94D8BD',

  labelStyle: {
    fontFamily: 'Solway-Light',
    fontSize: 10,
  },
  style: {
  },
}

const drawerOptions = {
  labelStyle: {
    fontFamily: 'Solway-Light',
    fontSize: 20,
  },
  activeTintColor: 'black',
  inactiveTintColor: '#94D8BD',
}