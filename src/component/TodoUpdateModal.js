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

//npm install react-native-modalbox@latest --save
import Modal from 'react-native-modalbox';

//npm i react-native-button
import Button from 'react-native-button';
import todoData from './TodoData';
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
    console.log(id);
    //this.props.onUpdate(id, this.state.taskName);
  };

  render() {
    return (
      <View>
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
          onPress={this.onUpdate(this.state.key)}>
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
});

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdate: (id, text) => {
      dispatch(actions.onUpdateTask(id, text));
    },
  };
};

export default connect(mapStateToProps, null)(TodoUpdateModal);
