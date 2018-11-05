import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

/* Imports Screens */
import RegisterScreens from './screens/RegisterScreen';
import LoginScreens from './screens/LoginScreens';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Register:{
    screen: RegisterScreens,
    navigationOptions: {
      header: null
    }
  } ,
  Login: LoginScreens
})
