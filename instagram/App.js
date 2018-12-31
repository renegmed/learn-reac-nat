import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import PhotoSection from './src/components/Photo-Section';
 
export default class App extends React.Component {
  
   render() {
    return (
      <View> 
        <Header text="Photos" />
        <PhotoSection />
        <PhotoSection />
      </View>
    );
  }
}
