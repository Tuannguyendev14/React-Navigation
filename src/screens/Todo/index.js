import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  TouchableHighlight,
  Image,
  Text,
  SectionList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Button from 'react-native-button';

import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '../../redux/todoRedux/actions';

// import todoData from '../component/TodoData';
import TodoItem from './components/TodoItem';
import DatePicker from 'react-native-datepicker';
import {fetchTasks} from '../../redux/todoRedux/actions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
      newTaskName: '',
      newDate: '',
    };
    this.sectionRef = null;
  }

  refreshFlatList = activeKey => {
    this.setState(prevState => {
      return {
        deletedRowKey: activeKey,
      };
    });

    this.sectionRef.scrollToLocation({
      sectionIndex: 1,
      itemIndex: 1,
      // viewPosition: 1,
    });
  };

  onRestart = () => {
    this.setState({
      newTaskName: '',
      newDate: '',
    });
  };

  onPressAdd = () => {
    const {newTaskName, newDate} = this.state;
    const newId = this.generateKey(24);
    if (newTaskName.length == 0 || newDate.length == 0) {
      alert('Enter task name & date!');
    } else {
      const newTask = {
        id: newId,
        taskName: newTaskName,
        date: newDate,
      };
      this.refreshFlatList(newId);
      this.props.addTask(newTask);
      this.onRestart();
    }
  };

  generateKey = numberOfCharacters => {
    return require('random-string')({length: numberOfCharacters});
  };

  showData = (editingTask, flatlistItem) => {
    this.setState({
      id: editingTask.id,
      newTaskName: editingTask.taskName,
      newDate: editingTask.date,
      flatlistItem: flatlistItem,
    });

    // this.refs.myModal.open();
  };

  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    const {tasks} = this.props;
    const groupData = _.groupBy(tasks, 'date');

    const sectionData = _.map(groupData, (value, id) => {
      return {
        title: id,
        data: value,
      };
    });

    return (
      <View style={style.styleView}>
        <View style={style.styleViewAdd}>
          <View style={style.styleViewForm}>
            <TextInput
              style={style.styleTextInput}
              placeholder="Enter task name"
              value={this.state.newTaskName}
              onChangeText={text => this.setState({newTaskName: text})}
            />

            <DatePicker
              style={style.styleDatePickerInput}
              date={this.state.newDate}
              mode="date"
              placeholder="Select date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={date => {
                this.setState({newDate: date});
              }}
            />
          </View>
          <View style={style.styleViewButtonAdd}>
            <TouchableHighlight
              style={style.styleButtonAdd}
              underlayColor="tomato"
              onPress={this.onPressAdd}>
              <Image
                style={style.styleIconAdd}
                source={require('../../../icons/add.png')}
              />
            </TouchableHighlight>
          </View>
        </View>

        <SafeAreaView style={style.container}>
          <SectionList
            ref={ref => (this.sectionRef = ref)}
            sections={sectionData}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index}) => {
              return (
                <TodoItem item={item} index={index} parentFlatList={this} />
              );
            }}
            renderSectionHeader={({section}) => (
              <Text style={style.header}>{section.title}</Text>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleView: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  styleTextInput: {
    height: 40,
    borderBottomColor: 'gray',
    margin: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  styleViewDatePicker: {
    alignContent: 'center',
    alignItems: 'center',
  },
  styleDatePickerInput: {
    width: 270,
    marginTop: 15,
    margin: 30,
  },
  styleHeaderView: {
    backgroundColor: 'white',
    height: 64,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  styleIconAdd: {
    width: 60,
    height: 60,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    backgroundColor: '#f0f6f7',
    height: 60,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  styleViewAdd: {
    flexDirection: 'row',
    backgroundColor: '#f8fbf3',
  },
  styleViewForm: {
    flexDirection: 'column',
    flex: 5,
  },
  styleViewButtonAdd: {
    flexDirection: 'column',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleButtonAdd: {
    marginRight: 20,
  },
});

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTask: newTask => dispatch(actions.addTask(newTask)),
    onFetchTasks: () => {
      dispatch(fetchTasks());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
