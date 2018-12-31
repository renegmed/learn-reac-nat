import React from 'react'; 
import { View, Text } from 'react-native'; 
import { Button } from 'react-native-elements';

export default class LoginForm extends React.Component {
  
    render() {
        return (
            <View> 
                <Button title="Login" backgroundColor="red"/>
            </View>
        ) 
    }
}
