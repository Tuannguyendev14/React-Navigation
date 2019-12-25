import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, Image} from 'react-native';

import Swipeout from 'react-native-swipeout';
// npm install --save react-native-swipeout

import todoData from './TodoData';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
    };
  }

  refreshFlatListItem = () => {
    this.setState(prevState => {
      return {
        numberOfRefresh: prevState.numberOfRefresh + 1,
      };
    });
  };
  render() {
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
            // Update
            this.props.parentFlatList.refs.editModal.showEditModal(
              todoData[this.props.index],
              this,
            );
          },
          text: 'Update',
          type: 'warning',
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
                    todoData.splice(this.props.index, 1);
                    // Refresh FlatList!
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
          <Text style={style.styleItem}>{this.props.item.taskName}</Text>
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
  },
});

export default TodoItem;
