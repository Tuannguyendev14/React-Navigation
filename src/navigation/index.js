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
          name: 'Login',
        },
      },
    });
  });

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
