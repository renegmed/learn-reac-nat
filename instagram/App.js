import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/Photo-Feed';
 
export default class App extends React.Component {
  
   render() {
    return (
      <View> 
        <Header text="Photos" />
        <PhotoFeed /> 
      </View>
    );
  }
}
