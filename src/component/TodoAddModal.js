import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Image,
  Dimensions,
  View,
} from 'react-native';
// add random-string: yarn add random-string
//npm i react-native-button
//npm install react-native-modalbox@latest --save
import Modal from 'react-native-modalbox';
import * as actions from '../redux/actions/index';

import Button from 'react-native-button';
import todoData from './TodoData';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';

var screen = Dimensions.get('window');

class TodoAddModal extends Component {
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

        <View style={style.styleViewDatePicker}>
          <DatePicker
            style={style.styleDatePickerInput}
            date={this.state.newDate}
            mode="date"
            placeholder="Select date"
            format="DD-MM-YYYY"
            // minDate="2016-05-01"
            // maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            styles={([style.dateIcon], [style.dateInput])}
            onDateChange={date => {
              this.setState({newDate: date});
            }}
          />
        </View>

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

            this.props.addTask(newTask);

            // todoData.push(newTask);
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
    marginTop: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  styleModal: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 280,
  },
  styleViewDatePicker: {
    alignContent: 'center',
    alignItems: 'center',
  },
  styleDatePickerInput: {
    width: 270,
    marginTop: 15,
  },
  dateIcon: {
    position: 'absolute',
    right: 0,
    top: 7,
    // marginLeft: 0,
  },
  dateInput: {
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 10,
  },
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTask: newTask => dispatch(actions.addTask(newTask)),
  };
};
export default connect(null, mapDispatchToProps)(TodoAddModal);
