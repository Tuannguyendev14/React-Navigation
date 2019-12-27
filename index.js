import React from 'react';
import {Navigation} from 'react-native-navigation';
import Home from './src/screens/Home';
import Detail from './src/component/Detail';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Todo from './src/screens/Todo';
import demo from './src/component/demo';
import todoUpdateModal from './src/component/TodoUpdateModal';

import {Provider} from 'react-redux';
import store from './src/redux/store';
// import thunk from 'redux-thunk';
// import {reduxFirestore, getFirestore} from 'redux-firestore';

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Detail', () => Detail);
Navigation.registerComponent('SignUp', () => SignUp);

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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Login',
      },
    },
  });
});
