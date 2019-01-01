import React from 'react'; 
import { View } from 'react-native'; 
import { Button, FormInput } from 'react-native-elements';
import firebase from 'firebase';
import InnerSection from './Inner-Section'; 
import { authInputChange } from '../actions';
import { connect } from 'react-redux';
import  {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID} from '../../Config';

class LoginForm extends React.Component {
    
    componentDidMount() {
        // console.log(API_KEY);
        // console.log(AUTH_DOMAIN);
        // console.log(DATABASE_URL);
        // console.log(PROJECT_ID);
        // console.log(STORAGE_BUCKET);
        // console.log(MESSAGING_SENDER_ID);

        const config = {
            apiKey: API_KEY,
            authDomain: AUTH_DOMAIN,
            databaseURL: DATABASE_URL,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID
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