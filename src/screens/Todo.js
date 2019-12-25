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
} from 'react-native';
import _ from 'lodash';

import todoData from '../component/TodoData';
import TodoItem from '../component/TodoItem';
import TodoAddModal from '../component/TodoAddModal';
import TodoEditModal from '../component/TodoUpdateModal';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
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
    });
  };

  onPressAdd = () => {
    this.refs.addModal.showAddModal();
  };

  render() {
    const groupData = _.groupBy(todoData, 'date');
    console.log('groupData', groupData);

    const sectionData = _.map(groupData, (value, key) => {
      return {
        title: key,
        data: value,
      };
    });

    console.log('sectionData', sectionData);

    return (
      <View style={style.styleView}>
        <View style={style.styleHeaderView}>
          <TouchableHighlight
            style={{marginRight: 10}}
            underlayColor="tomato"
            onPress={this.onPressAdd}>
            <Image
              style={style.styleIconAdd}
              source={require('../../icons/add.png')}
            />
          </TouchableHighlight>
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

        <TodoAddModal ref={'addModal'} parentFlatList={this} />
        <TodoEditModal ref={'editModal'} parentFlatList={this} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleView: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  styleHeaderView: {
    backgroundColor: 'white',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  styleIconAdd: {
    width: 35,
    height: 35,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default Todo;
