import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import axios from 'axios'; 
import PhotoSection from './Photo-Section';

export default class PhotoFeed extends Component { 
    state = { photos: [{username: ''}] };

    componentDidMount() {  // called before render() function is called
        axios.get('http://localhost:3000/photos')
        .then(response => { 
            this.setState({ photos: response.data });  // triggers re-render 
        });
    }

    getPhotos() {
        return this.state.photos.map( (_photo, index) => {
            return (
                <PhotoSection key={index} photo={_photo} />
            );    
        });
    }
    render() {  
        return (
            <ScrollView>
                {this.getPhotos()}
            </ScrollView>
        );
    }
}