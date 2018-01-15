import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { View, Button, StyleSheet, Text, SectionList } from 'react-native';
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
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

class AppContainer extends Component {
    render(){
        return  <View style={styles.container}>
            <Section text={this.props.text} start={this.props.start} />
            <Button title='prueba' onPress={()=>{ alert(this.props.text) }} />
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