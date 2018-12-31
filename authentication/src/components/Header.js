import React from 'react';
import { Text, View } from 'react-native'; 
 
const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {props.text} </Text>        
    </View>
  );
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

export default Header;