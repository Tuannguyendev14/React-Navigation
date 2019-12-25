import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

class Button extends Component {
  onHandleSubmit = event => {
    this.props.onHandleSubmit();
  };

  render() {
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <TouchableWithoutFeedback onPress={this.onHandleSubmit}>
          <Text style={style.button2}>Đăng kí</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const style = StyleSheet.create({
  button1: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    width: 170,
    padding: 12,
    textAlign: 'center',
    marginLeft: 20,
    backgroundColor: 'white',
    borderColor: 'blue',
    color: '#a09292',
  },
  button2: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    width: 170,
    padding: 12,
    textAlign: 'center',
    marginLeft: 20,
    backgroundColor: '#15d0ef',
    borderColor: 'white',
    color: 'white',
  },
});

export default Button;
