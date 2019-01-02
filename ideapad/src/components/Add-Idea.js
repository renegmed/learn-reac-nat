import React from 'react'; 
import { View, ActivityIndicator } from 'react-native'; 
import { Button, FormInput } from 'react-native-elements'; 
import InnerSection from './Inner-Section'; 
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux'; 
import IdeaPad from './IdeaPad-Form';

class AddIdea extends React.Component {
    
    create() {  
        const { title, idea } = this.props;
        this.props.createIdea({title, idea});
    }
 
    render() {
        if (this.props.user) {
            return (
                <IdeaPad />
            );
        }
        return (
            <View style="styles.container">  
                <IdeaPad />
                <InnerSection>
                    <Button title="Submit" onPress={this.create.bind(this)} backgroundColor={'#3bd3d4'}/>
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
        title: state.ideaPadForm.title,
        idea: state.ideaPadForm.idea,
        
    }
}
export default connect(mapStateToProps, {ideaInputChange, createIdea})(AddIdea);