import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {onChangeIntoMainScreen, onSignUp} from './../../navigation';
import {connect} from 'react-redux';
import {logIn} from '../../redux/userRedux/actions';
import {AsyncStorage} from 'react-native';
// import {fetchTasks} from '../../redux/todoRedux/actions';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Input from '../../component/Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      email: 'tuan.nguyen.dev@gmail.com',
      password: 'tuannui123',
    };
  }

  componentDidMount() {
    const {data} = this.props.userData;
    console.log(data);
    // this.props.onFetchTasks();
  }

  onRestart = () => {
    this.setState({
      errorEmail: '',
      errorPassword: '',
    });
  };

  onSignUp = () => {
    onSignUp();
  };

  onLogin = event => {
    var {email, password} = this.state;
    this.onRestart();

    if (email === '') {
      this.setState({errorEmail: 'Enter email!'});
    }
    if (password === '') {
      this.setState({errorPassword: 'Enter password!'});
    }
    if (password.length < 8) {
      this.setState({errorPassword: 'Password is not valid!'});
    }
    if (password.length > 64) {
      this.setState({errorPassword: 'Password is not valid!'});
    } else {
      var user = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.onLogInUser(user);
      // AsyncStorage.setItem('user', JSON.stringify(user));
    }
    // this.storeData();
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  getData = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    var {errorEmail, errorPassword} = this.state;
    return (
      <ScrollView style={style.styleScroll}>
        <View style={style.styleViewImage}>
          <Image
            style={style.styleImage}
            source={require('../../../icons/appIcon.jpg')}
          />
        </View>

        <View style={style.styleViewInput}>
          <Input
            getData={e => this.getData('email', e)}
            title="Email*"
            placeholder="Enter email..."
            error={errorEmail}
          />
          <Input
            getData={e => this.getData('password', e)}
            title="Password*"
            placeholder="Enter password..."
            error={errorPassword}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
            // value={this.state.password}
          />
        </View>

        <View style={style.styleLoginButton}>
          <TouchableWithoutFeedback onPress={this.onLogin}>
            <Text style={style.button}>Login</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={style.styleViewText}>
          <Text style={style.styleTextBottom}>Don't you have an Account?</Text>
          <TouchableWithoutFeedback onPress={this.onSignUp}>
            <Text style={style.styleButtonSignUp}>Create Account</Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#2bb6f9',
    borderColor: 'blue',
    color: 'white',
    flex: 1,
    margin: 10,
  },
  styleImage: {
    width: '100%',
    height: 300,
  },
  styleScroll: {
    flex: 1,
  },
  styleViewImage: {
    flex: 2,
    margin: 3,
  },
  styleViewInput: {
    flex: 2,
    margin: 10,
  },
  styleLoginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  styleViewText: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 30,
    marginBottom: 50,
  },
  styleButtonSignUp: {
    color: '#2bb6f9',
    fontWeight: 'bold',
    fontSize: 20,
  },
  styleTextBottom: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogInUser: user => {
      dispatch(logIn(user));
    },
    // onFetchTasks: () => {
    //   dispatch(fetchTasks());
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
