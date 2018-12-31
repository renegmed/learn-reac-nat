import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/Photo-Feed';
import { createStore } from 'redux';
import reducers from './src/reducers'

export default class App extends React.Component {
  
   render() {
    return (
      <Provider store={createStore(reducers)} >
        <View> 
          <Header text="Photos" />
          <PhotoFeed /> 
        </View>
      </Provider> 
    );
  }
}
