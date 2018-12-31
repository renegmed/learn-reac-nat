import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios'; 

export default class PhotoFeed extends Component { 
    render() {
        axios.get('http://localhost:3000/photos')
            .then(response => console.log(response.data));
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}