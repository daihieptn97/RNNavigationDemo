/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import SplashScreen from "./src/screen/SplashScreen";
import LoginScreen from './src/screen//login';

export default class App extends Component {
  render() {
    return (
      <AppRoot />
    );
  }
}

const AppRoots = createStackNavigator(
  {
    AuthLoading: SplashScreen,
    App: LoginScreen,
  },
  {
    initialRouteName: "AuthLoading",
    headerMode: "none"
  }
);

const AppRoot = createAppContainer(AppRoots);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
