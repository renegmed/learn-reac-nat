import React from 'react'; 
import { View } from 'react-native'; 
import { Button } from 'react-native-elements'; 
import InnerSection from './Inner-Section'; 
import { ideaInputChange, editIdea, deleteIdea } from '../actions';
import { connect } from 'react-redux'; 
import IdeaPad from './IdeaPad-Form';
import _ from 'lodash';

class EditIdea extends React.Component {
    
    componentDidMount() {
        const { params } = this.props.navigation.state;
        _.each(params.idea, (value, field) => {
            this.props.ideaInputChange({field, value});
        });
    }
    edit() {
        const { id } = this.props.navigation.state.params.idea;
        const { title, idea } = this.props;
        this.props.editIdea({title, idea, id});
        this.props.navigation.navigate("Ideas");
    }
 
    delete() {
        const { id } = this.props.navigation.state.params.idea; 
        this.props.deleteIdea({id});
        this.props.navigation.navigate("Ideas");
    }
    render() {
        if (this.props.user) {
            return (
                <IdeaPad />
            );
        }
        return (
            <View style="styles.container">  
                <IdeaPad {...this.props}/>
                <InnerSection>
                    <Button title="Save" onPress={this.edit.bind(this)} backgroundColor={'#3bd3d4'}/>
                </InnerSection> 
                <InnerSection>
                    <Button title="Delete" onPress={this.delete.bind(this)} backgroundColor={'#ef2b35'}/>
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
export default connect(mapStateToProps, {ideaInputChange, editIdea, deleteIdea })(EditIdea);