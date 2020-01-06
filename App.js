import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {onLogIn, onChangeIntoMainScreen} from './src/navigation';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.onCheck();
  }

  onCheck = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let parsed = JSON.parse(user);
      // alert(parsed.username);
      if (parsed) {
        onChangeIntoMainScreen();
      } else {
        onLogIn();
      }
    } catch (error) {
      alert(error);
    }
  };

  componentWillMount() {
    setTimeout(() => {}, 3000);
  }
  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="red " />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
