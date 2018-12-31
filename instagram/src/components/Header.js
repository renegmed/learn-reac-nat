import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    );
  }
}

const styles = {
    container: { 
      backgroundColor: '#fafbfc',
      paddingTop: 24,
      alignItems: 'center',
      borderBottomColor: '#ddd',
      borderBottomWidth: 2, 
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 13,
    }
};