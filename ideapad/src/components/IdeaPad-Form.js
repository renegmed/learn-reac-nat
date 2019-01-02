import React from 'react'; 
import { View } from 'react-native'; 
import { FormInput } from 'react-native-elements'; 
import InnerSection from './Inner-Section'; 
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux'; 

class IdeaPadForm extends React.Component {
     
    render() {
       
        return (
            <View>  
                <InnerSection>
                    <FormInput placeholder="Title" 
                        value={this.props.title}
                        onChangeText={text => this.props.ideaInputChange({
                            'field': 'title',
                            'value': text,
                        })}/>
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="Jot doen you ideas here ..."  
                        value={this.props.idea}
                        onChangeText={text => this.props.ideaInputChange({
                            'field': 'idea',
                            'value': text,
                        })}
                        multiline={true}
                        inputStyle={{height:200}}
                    />
                </InnerSection>  
            </View>
        ) 
    }
} 

const mapStateToProps = state => {      // state are from reducers/Authentication-Reducer.js -> reducers/index.js 
    return { 
        title: state.ideaPadForm.title,
        idea: state.ideaPadForm.idea,
        
    }
}
export default connect(mapStateToProps, {ideaInputChange, createIdea})(IdeaPadForm);