import React from 'react'; 
import { View } from 'react-native'; 
import { Button, FormInput } from 'react-native-elements';
import firebase from 'firebase';
import InnerSection from './Inner-Section'; 

export default class LoginForm extends React.Component {
    
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
                    <FormInput placeholder="Email" />
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="Password" secureTextEntry={true}/>
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
