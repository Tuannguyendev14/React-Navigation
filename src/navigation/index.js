import React from 'react';
import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Home/Detail';
import SignUp from '../screens/Register';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Todo from '../screens/Todo';
import todoUpdateModal from '../screens/Todo/TodoUpdateModal';

import {Provider} from 'react-redux';
import store from '../redux/store';

import iconHome from '../../icons/home.png';
import iconTodos from '../../icons/todos.jpg';
import iconProfile from '../../icons/profile.png';
import App from '../../App';
function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'App',
        },
      },
    });
  });

  Navigation.registerComponent(
    'App',
    () => ReduxProvider(App),
    () => App,
  );

  Navigation.registerComponent(
    'Detail',
    () => ReduxProvider(Detail),
    () => Detail,
  );

  Navigation.registerComponent(
    'SignUp',
    () => ReduxProvider(SignUp),
    () => SignUp,
  );

  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );

  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );

  Navigation.registerComponent(
    'Todo',
    () => ReduxProvider(Todo),
    () => Todo,
  );

  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'todoUpdateModal',
    () => ReduxProvider(todoUpdateModal),
    () => todoUpdateModal,
  );
};

export const onChangeIntoMainScreen = () => {
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
                  icon: iconHome,
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
                  icon: iconTodos,
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
                  icon: iconProfile,
                  // icon: require('../../../icons/profile.png'),
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

export const onSignUp = () => {
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

export const onLogIn = () => {
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
