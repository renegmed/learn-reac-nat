import React, { Component } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios'; 

export default class PhotoFeed extends Component { 
    state = { photos: [{username: ''}] };

    componentDidMount() {  // called before render() function is called
        axios.get('http://localhost:3000/photos')
        .then(response => {
            console.log(response.status);
            this.setState({ photos: response.data });  // triggers re-render

        });
    }

    render() {  
        return (
            <View>
                <Text> {this.state.photos[0].username} </Text>
            </View>
        );
    }
}