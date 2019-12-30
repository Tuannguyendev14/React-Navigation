import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Dimensions,
  View,
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import {Navigation} from 'react-native-navigation';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
var screen = Dimensions.get('window');

class TodoUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      taskName: '',
      date: '',
    };
  }

  componentDidMount() {
    this.setState({
      key: this.props.data.key,
      taskName: this.props.data.taskName,
      date: this.props.data.date,
    });
  }

  onUpdate = id => {
    var {key, taskName, date} = this.state;
    var task = {
      key: id,
      taskName: taskName,
      date: date,
    };
    console.log(this.state);
    this.props.onUpdate(id, task);
    this.onBack();
  };

  onBack = () => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Todo',
        },
      },
    });
  };

  render() {
    console.log(this.state.taskName);
    return (
      <View>
        <TextInput
          style={style.styleTextInput}
          placeholder="Enter task name"
          value={this.state.taskName}
          onChangeText={text => this.setState({taskName: text})}
        />
        <DatePicker
          style={style.styleDatePickerInput}
          date={this.state.date}
          mode="date"
          placeholder="Select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          value={this.state.date}
          onDateChange={date => {
            this.setState({date: date});
          }}
        />
        <Button
          style={style.styleButtonAdd}
          onPress={() => this.onUpdate(this.state.key)}>
          Save
        </Button>
      </View>
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
  styleDatePickerInput: {
    width: 350,
    marginTop: 15,
    margin: 30,
  },
});

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdate: (id, task) => {
      dispatch(actions.onUpdateTask(id, task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoUpdateModal);
