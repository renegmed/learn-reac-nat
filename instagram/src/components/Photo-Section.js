import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class PhotoSection extends Component {

    onPressLike = (e) => {
        console.log("[PhotoSection] onPressLike");
    }

    render() {
        return (
            <View>
                <View>
                    <Image 
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CandymyloveYasu.png/440px-CandymyloveYasu.png'}}
                    />
                    <Text>username</Text>
                </View>

                <View>
                    <Image 
                        style={{width: null, height: 400}}
                        source={{uri: 'https://thepointsguy.com/wp-content/uploads/2017/12/GettyImages-559540301.jpg'}}
                    />
                </View>
                <View>
                    <Button title="Like" onPress={this.onPressLike} />
                </View>
                <View>
                    <Text>username</Text>
                    <Text>caption</Text>
                </View>
            </View>
        );
    }
}