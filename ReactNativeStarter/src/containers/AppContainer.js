import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import Section from '../components/Section';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });

class AppContainer extends Component {
    render(){
        return  <View style={styles.container}>
            <Section text={this.props.text} start={this.props.start} />
            <Button title='test' onPress={()=>{ alert(this.props.text) }} />
        </View>
    }
}

function mapStateToProps(state) {
    return {
      text: state.default.get('text')
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);