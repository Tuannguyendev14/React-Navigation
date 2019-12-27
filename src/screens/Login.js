import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Input from '../component/Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      userName: 'huutuan',
      password: 'tuannui123',
    };
  }

  onRestart = () => {
    this.setState({
      errorUserName: '',
      errorPassword: '',
    });
  };

  onSignUp = () => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'SignUp',
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

  onChangeIntoMainScreen = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                      options: {
                        topBar: {
                          title: {
                            text: 'Upcoming events',
                            alignment: 'center',
                          },
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Home',
                    icon: require('../../icons/home.png'),
                    testID: 'FIRST_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Todo',
                      options: {
                        topBar: {
                          title: {
                            text: 'To do list',
                            alignment: 'center',
                          },
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Todos',
                    icon: require('../../icons/todos.jpg'),
                    testID: 'FIRST_TAB_BAR_BUTTON',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Profile',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Profile',
                    icon: require('../../icons/profile.png'),
                    testID: 'FIRST_TAB_BAR_BUTTON',
                  },
                },
              },
            },
          ],
        },
      },
    });
  };

  onLogin = event => {
    var {userName, password} = this.state;
    this.onRestart();

    if (userName === '') {
      this.setState({errorUserName: 'Enter user name!'});
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
    if (userName === 'huutuan' && password === 'tuannui123') {
      alert('Login successfully');
      this.onChangeIntoMainScreen();
    }
  };

  getData = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    var {errorUserName, errorPassword} = this.state;
    return (
      <ScrollView style={style.styleScroll}>
        <View style={style.styleViewImage}>
          <Image
            style={style.styleImage}
            source={require('../../icons/appIcon.jpg')}
          />
        </View>

        <View style={style.styleViewInput}>
          <Input
            getData={e => this.getData('userName', e)}
            title="User name*"
            placeholder="Enter user name..."
            error={errorUserName}
            value={this.state.userName}
          />
          <Input
            getData={e => this.getData('password', e)}
            title="Password*"
            placeholder="Enter password..."
            error={errorPassword}
            returnKeyType="go"
            secureTextEntry={true}
            autoCorrect={false}
            value={this.state.password}
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

export default Login;
