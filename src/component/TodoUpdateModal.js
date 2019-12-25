import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Image,
  Dimensions,
} from 'react-native';

//npm install react-native-modalbox@latest --save
import Modal from 'react-native-modalbox';

//npm i react-native-button
import Button from 'react-native-button';
import todoData from './TodoData';

var screen = Dimensions.get('window');

export default class TodoUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      date: '',
    };
  }

  showEditModal = (editingTask, flatlistItem) => {
    // console.log(`editingTask = ${JSON.stringify(editingTask)}`);

    this.setState({
      key: editingTask.key,
      taskName: editingTask.taskName,
      date: editingTask.date,
      flatlistItem: flatlistItem,
    });

    this.refs.myModal.open();
  };

  // generateKey = numberOfCharacters => {
  //   return require('random-string')({length: numberOfCharacters});
  // };

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
        <Text style={style.styleTitle}>Update data</Text>

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter task name"
          value={this.state.taskName}
          onChangeText={text => this.setState({taskName: text})}
        />

        <TextInput
          style={style.styleTextInput}
          placeholder="Enter date "
          value={this.state.date}
          onChangeText={text => this.setState({date: text})}
        />

        <Button
          style={style.styleButtonAdd}
          onPress={() => {
            // Update existing Food
            var foundIndex = todoData.findIndex(
              item => this.state.key == item.key,
            );

            if (foundIndex < 0) {
              return; // Not found
            }

            todoData[foundIndex].taskName = this.state.taskName;
            todoData[foundIndex].date = this.state.date;

            // Refresh flatlist item
            this.state.flatlistItem.refreshFlatListItem();
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
