import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
// add random-string: yarn add random-string
//npm i react-native-button
//npm install react-native-modalbox@latest --save
import Modal from 'react-native-modalbox';

import Button from 'react-native-button';
import todoData from './TodoData';

var screen = Dimensions.get('window');

export default class TodoAddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: '',
      newDate: '',
    };
  }

  showAddModal = () => {
    this.refs.myModal.open();
  };

  generateKey = numberOfCharacters => {
    return require('random-string')({length: numberOfCharacters});
  };

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={style.styleModal}
        position="center"
        backdrop={true}
        onClosed={() => {
          alert('Your data saved ! ');
        }}>
        <TextInput
          style={style.styleTextInput}
          placeholder="Enter task name"
          value={this.state.newTaskName}
          onChangeText={text => this.setState({newTaskName: text})}
        />

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter date "
          value={this.state.newDate}
          onChangeText={text => this.setState({newDate: text})}
        />

        <Button
          style={style.styleButtonAdd}
          onPress={() => {
            if (
              this.state.newTaskName.length == 0 ||
              this.state.newDate.length == 0
            ) {
              alert('Enter name & date!');
              return;
            }
            const newKey = this.generateKey(24);
            const newTask = {
              key: newKey,
              taskName: this.state.newTaskName,
              date: this.state.newDate,
            };

            todoData.push(newTask);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
          }}>
          Save
        </Button>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  styleTextInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  styleButtonAdd: {
    fontSize: 18,
    color: 'white',
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 10,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  styleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  styleModal: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280,
  },
});
