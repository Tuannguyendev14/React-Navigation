import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Swipeout from 'react-native-swipeout';
import CheckBox from 'react-native-check-box';
import {connect} from 'react-redux';
import * as actions from '../../../redux/todoRedux/actions';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
      isChecked: false,
    };
  }

  refreshFlatListItem = () => {
    this.setState(prevState => {
      return {
        numberOfRefresh: prevState.numberOfRefresh + 1,
      };
    });
  };

  onDelete = id => {
    this.props.onDeleteTask(id);
  };

  onPress = item => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'todoUpdateModal',
              passProps: {
                data: item,
              },
              options: {
                topBar: {
                  title: {
                    text: 'Update',
                    alignment: 'center',
                  },
                },
              },
            },
          },
        ],
      },
    });
  };

  isChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    const {item} = this.props;

    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        this.setState({activeRowKey: null});
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            this.onPress(item);
          },
          text: 'Update',
          type: 'Update',
        },
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    this.onDelete(this.props.item.id);
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };

    return (
      <Swipeout {...swipeSettings}>
        <View style={style.styleView}>
          <CheckBox
            style={{padding: 10}}
            isChecked={this.state.isChecked}
            onClick={this.isChecked}
          />
          <Text style={style.styleItem}>{item.taskName}</Text>
        </View>
      </Swipeout>
    );
  }
}

const style = StyleSheet.create({
  styleItem: {
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
  styleView: {
    backgroundColor: 'white',
    borderBottomColor: '#2bb6f9',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
});

const mapStateToProps = state => {
  return {
    tasks: state.task.tasks,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask: id => {
      dispatch(actions.deleteTask(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
