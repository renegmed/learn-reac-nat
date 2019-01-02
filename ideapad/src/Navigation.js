import React, { Component } from 'react';
//import { StackNavigator, SwitchNavigator } from 'react-navigation';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginForm from './components/Login-Form';
import IdeaList from './components/Idea-List';
import IdeaPadForm from './components/IdeaPad-Form'; 
import { Icon } from 'react-native-elements';

const AuthStack = createStackNavigator({ 
    Login: {
      screen: LoginForm,
      navigationOptions: {
        headerTitle: 'Login'
      }
    } 
});
   
const AppStack = createStackNavigator({
    Ideas: {
        screen: IdeaList,
        navigationOptions: ({navigation}) => {
            return {
                title: 'Your IdeaPad',
                headerRight: (
                    <Icon 
                        type='evilicon'
                        name='plus'
                        size={30}
                        onPress={() => navigation.navigate('AddIdeas')}
                        iconStyle={{paddingRight: 10}}
                    />
                ),
                headerLeft: null
            }
        } 
    },
    AddIdeas: {
        screen: IdeaPadForm,
        navigationOptions: {
            headerTitle: 'Add your Ideas'
        }
    }
});

const AppNavigator = createSwitchNavigator (
    {
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
)
  
export default AppNavigator;