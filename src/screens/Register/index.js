import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Input from '../../component/Input';
import Button from '../../component/Button';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      userName: '',
      email: '',
      phone: '',
      accountName: '',
      password: '',
      confirmPass: '',
      errorUserName: '',
      errorEmail: '',
      errorPhone: '',
      errorAccountName: '',
      errorPassword: '',
      errorConfirmPass: '',
    };
  }

  onRestart = () => {
    this.setState({
      errorUserName: '',
      errorEmail: '',
      errorPhone: '',
      errorAccountName: '',
      errorPassword: '',
      errorConfirmPass: '',
    });
  };

  onLogIn = () => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'Login',
          options: {
            topBar: {
              title: {
                text: 'Register',
                alignment: 'center',
              },
            },
          },
        },
      },
    });
  };

  onHandleSubmit = event => {
    var {
      userName,
      email,
      accountName,
      phone,
      password,
      confirmPass,
    } = this.state;

    const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.onRestart();

    if (userName === '') {
      this.setState({errorUserName: 'Enter user name!'});
    }
    if (email === '') {
      this.setState({errorEmail: 'Enter email!'});
    }
    if (formatEmail.test(email) === false) {
      this.setState({errorEmail: 'Email is not valid!'});
    }
    if (accountName === '') {
      this.setState({errorAccountName: 'Enter user account!'});
    }
    if (phone === '') {
      this.setState({errorPhone: 'Enter email!'});
    }
    if (isNaN(phone)) {
      this.setState({errorPhone: 'Phone number is not valid!'});
    }
    if (phone.length > 10) {
      this.setState({errorPhone: 'Phone number is not valid!'});
    }
    if (phone.length < 10) {
      this.setState({errorPhone: 'Phone number is not valid!'});
    }
    if (password === '') {
      this.setState({errorPassword: 'Enter password!'});
    }
    if (password.length < 8) {
      this.setState({errorPassword: 'Password is not valid!'});
    }
    if (password.length > 64) {
      this.setState({errorPassword: 'Password is not valid!'});
    }
    if (confirmPass != password) {
      this.setState({errorConfirmPass: 'Password does not match!'});
    }
  };

  getData = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    var {
      errorPhone,
      errorUserName,
      errorEmail,
      errorAccountName,
      errorPassword,
      errorConfirmPass,
    } = this.state;
    return (
      <ScrollView orientation="vertical">
        <View style={style.styleViewImage}>
          <Image
            style={style.styleImage}
            source={require('../../../icons/appIcon.jpg')}
          />
        </View>
        <View style={style.container}>
          <Input
            getData={e => this.getData('userName', e)}
            title="User name *"
            placeholder="Enter user name..."
            error={errorUserName}
          />
          <Input
            getData={e => this.getData('email', e)}
            title="Email *"
            placeholder="Enter email..."
            error={errorEmail}
          />
          <Input
            getData={e => this.getData('phone', e)}
            title="Phone *"
            placeholder="Enter phone number..."
            error={errorPhone}
            keyboardType="numeric"
          />
          <Input
            getData={e => this.getData('accountName', e)}
            title="User account's name *"
            placeholder="Enter user account's name..."
            error={errorAccountName}
          />
          <Input
            getData={e => this.getData('password', e)}
            title="Password *"
            placeholder="Enter Password..."
            error={errorPassword}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
          />
          <Input
            getData={e => this.getData('confirmPass', e)}
            title="Confirm password *"
            placeholder="Confirm password ..."
            error={errorConfirmPass}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
          />

          <View style={style.styleSignUpButton}>
            <TouchableWithoutFeedback onPress={this.onHandleSubmit}>
              <Text style={style.button}>Create Account</Text>
            </TouchableWithoutFeedback>
          </View>

          <View style={style.styleViewText}>
            <Text style={style.styleTextBottom}>Already have an account?</Text>
            <TouchableWithoutFeedback onPress={this.onLogIn}>
              <Text style={style.styleButtonSignUp}>Login</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  styleViewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  styleViewText: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
  },
  styleTextBottom: {
    fontSize: 20,
    textAlign: 'center',
  },
  styleButtonSignUp: {
    color: '#2bb6f9',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
    marginTop: 40,
  },
  textBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleSignUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
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
  styleViewImage: {
    flex: 2,
    margin: 3,
  },
  styleImage: {
    width: '100%',
    height: 300,
  },
});

export default SignUp;
