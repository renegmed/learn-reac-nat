import React from 'react'; 
import { View } from 'react-native'; 
import { Button, FormInput } from 'react-native-elements';
import firebase from 'firebase';
import InnerSection from './Inner-Section'; 
import { authInputChange } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAjH5pEnkugf2EVk9LJSNAPXKle-3Q-jIE",
            authDomain: "authentication-2d360.firebaseapp.com",
            databaseURL: "https://authentication-2d360.firebaseio.com",
            projectId: "authentication-2d360",
            storageBucket: "authentication-2d360.appspot.com",
            messagingSenderId: "677531134728"
          };
          firebase.initializeApp(config);
        
    }
    
    render() {
        return (
            <View style={styles.container}> 
                <InnerSection>
                    <FormInput placeholder="Email" onChangeText={text => this.props.authInputChange({
                        'field': 'email',
                        'value': text,
                        })}/>
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="Password" secureTextEntry={true} 
                        onChangeText={text => this.props.authInputChange({
                            'field': 'password',
                            'value': text,
                        })}/>
                </InnerSection>
                <InnerSection>
                    <Button title="Login" backgroundColor={'#3bd3d4'}/>
                </InnerSection>    
            </View>
        ) 
    }
}

const styles = {
    container: {
        marginTop: 50
    }
}

export default connect(null, {authInputChange})(LoginForm);