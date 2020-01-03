import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Platform, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import Item from './components/Item';
import data from '../../utils/Data';
import {onLogIn, onChangeIntoMainScreen} from '../../navigation';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
  }

  componentDidMount() {
    this.onCheck();
    // console.log('log--userData ', this.props.userData.data.response);
    //const {data} = this.props.userData;
    // alert('Welcome ' + data.username);
    //console.log(data);
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      // alert(parsed.username);
      if (!parsed.token) {
        onLogIn();
      }
    } catch (error) {
      alert(error);
    }
  };

  refreshFlatList = activeKey => {
    this.setState(prevState => {
      return {
        deletedRowKey: activeKey,
      };
    });
  };

  render() {
    return (
      <View style={style.styleView}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => {
            return (
              <Item
                item={item}
                index={index}
                parentFlatList={this}
                component={this.props.componentId}
              />
            );
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleView: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
});

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
