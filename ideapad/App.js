import React from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import config from './config';
import AppNavigator from './src/Navigation';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
 
  componentDidMount() { 
    firebase.initializeApp(config); 
  }

  render() {

    const AppContainer = createAppContainer(AppNavigator);

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppContainer /> 
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
