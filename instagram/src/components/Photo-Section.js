import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PhotoSection extends Component { 
    constructor() {
        super();

        this.like = false;
        this.state = { heartIcon: 'ios-heart-empty'}
    }

    toggleLike() { 
        this.like = !this.like;
        if (this.like) {
            this.setState( { heartIcon: 'ios-heart'} );
        } else {
            this.setState( { heartIcon: 'ios-heart-empty'} );
        }
    }
    render() {
        const { username, user_avatar, image, caption } = this.props.photo;
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailSection}>
                    <Image 
                        style={styles.thumbnail}
                        source={{uri: `${user_avatar}`}}
                    />
                    <View style={styles.userContainer}>
                        <Text style={styles.username}>{username}</Text>
                    </View>
                </View> 
                <View>
                    <Image 
                        style={{width: null, height: 400}}
                        source={{uri:  `${image}`}}
                    />
                </View>
                <View style={styles.heartContainer}>
                    <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
                        <Ionicons 
                            name={this.state.heartIcon}
                            size={30}
                            style={{ color: this.state.heartIcon == 'ios-heart'? 'red': 'black'}}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.imageMeta}>
                    <Text style={styles.username}>{username}</Text>
                    <Text>{caption}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        margin: 10
    },

    thumbnailSection: {
        flexDirection: 'row',
        padding: 5, 
        borderBottomColor: '#ddd',
        borderBottomWidth: 1, 
    },
    
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    userContainer: {
        justifyContent: 'center',
        padding: 5,
    },

    imageMeta: {
        flexDirection: 'row',
        paddingRight: 5,
    },

    username: {
        fontWeight: 'bold',
        paddingRight: 5,
    },

    heartContainer: {
        paddingTop: 2,
        paddingBottom: 2,
    }
}