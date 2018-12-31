import React, { Component } from 'react';
import { View, ScrollView} from 'react-native'; 
import PhotoSection from './Photo-Section';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class PhotoFeed extends Component { 
    
    componentWillMount() {  // called before render() function is called
        this.props.getPhotos();
    }

    renderPhotos() {
        return this.props.photos.map( (_photo) => {
            console.log("[Photo-Feed] renderPhotos:", _photo.id);
            return (
                <PhotoSection key={_photo.id} photo={_photo} />
            );    
        });
    }
    render() {  
        return (
            <ScrollView>
                {this.renderPhotos()}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {  // mapping from redux state to props state (see reducers/index.js) thus argument state is from redux storage
    return {
        photos: state.photos        
    }
}
export default connect(mapStateToProps, {getPhotos})(PhotoFeed);