import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import IdeaPadForm from './src/components/IdeaPad-Form';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import config from './config';

export default class App extends React.Component {
 
  componentDidMount() { 
    firebase.initializeApp(config); 
  }

  render() {
    
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <Header text="Login" />
          <IdeaPadForm />
        </View>
      </Provider>
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
