import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableHighlight,
  Image,
  Text,
  SectionList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux';
import TodoItem from './components/TodoItem';
import DatePicker from 'react-native-datepicker';
import {fetchTasks, addTask} from '../../redux/todoRedux/actions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
      taskName: '',
      date: '',
    };
    this.sectionRef = null;
  }

  refreshSectionList = activeKey => {
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
      taskName: '',
      date: '',
    });
  };

  onPressAdd = () => {
    const {id, taskName, date} = this.state;
    const newId = this.generateKey(24);
    if (taskName.length === 0 || date.length === 0) {
      alert('Enter task name & date!');
    } else {
      const task = {
        id: id,
        taskName: taskName,
        date: date,
      };
      this.refreshSectionList(newId);
      this.props.onAddTask(task);
      this.onRestart();
    }
  };

  generateKey = numberOfCharacters => {
    return require('random-string')({length: numberOfCharacters});
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
              onDateChange={date => {
                this.setState({date: date});
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
    onAddTask: task => {
      dispatch(addTask(task));
    },
    onFetchTasks: () => {
      dispatch(fetchTasks());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
