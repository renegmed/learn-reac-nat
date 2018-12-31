import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/Login-Form';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header text="Login" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
