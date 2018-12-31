import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Header from './src/components/Header';
import PhotoFeed from './src/components/Photo-Feed';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {
  
   render() {
    
    const store = createStore( reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <View> 
          <Header text="Photos" />
          <PhotoFeed /> 
        </View>
      </Provider> 
    );
  }
}
