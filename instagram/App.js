import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import PhotoSection from './src/components/Photo-Section';

export default class App extends React.Component {
  
   render() {
    return (
      <View>
        <Header text="Photos"/>
        <PhotoSection />
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
