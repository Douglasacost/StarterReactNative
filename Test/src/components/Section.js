import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {height: 40, width: 200, paddingBottom: 10}
  });


export default class Section extends Component {
    constructor(props) {
      super(props);
    }  
    change(text){
        return this.props.start(text)
    }
    render() {
      return (
        <TextInput
          style={styles.input}
          onChangeText={this.change.bind(this)}
          value={this.props.text}
        />
      );
    }
}