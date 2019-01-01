import React from 'react'; 
import { View, ActivityIndicator } from 'react-native'; 
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import firebase from 'firebase';
import InnerSection from './Inner-Section'; 
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';
import  {API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID} from '../../Config';

class LoginForm extends React.Component {
    
    componentDidMount() { 

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
    
    login() {
        //console.log(this.props);
        const { email, password } = this.props;
        this.props.login({email, password});
    }

    showButton() {
        if (this.props.loading) {
            return (
                <View>
                    <ActivityIndicator size={'small'} />
                </View>
            );
        }

        return (
            <Button title="Login" onPress={this.login.bind(this)} backgroundColor={'#3bd3d4'}/>
        ); 
    }

    showError() {
        if (this.props.error) {
            return (
                <FormValidationMessage>{this.props.error}</FormValidationMessage>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}> 
                <InnerSection>
                    <FormInput placeholder="Email" 
                        value={this.props.email}
                        onChangeText={text => this.props.authInputChange({
                            'field': 'email',
                            'value': text,
                        })}/>
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="Password" secureTextEntry={true}
                        value={this.props.password}
                        onChangeText={text => this.props.authInputChange({
                            'field': 'password',
                            'value': text,
                        })}/>
                </InnerSection>
                {this.showError()}
                <InnerSection>
                    {this.showButton()}
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


const mapStateToProps = state => {      // state are from reducers/Authentication-Reducer.js -> reducers/index.js 
    return { 
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        user: state.auth.user,
        error: state.auth.error 
    }
}
export default connect(mapStateToProps, {authInputChange, login})(LoginForm);