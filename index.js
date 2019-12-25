/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Home from './src/screens/Home';
import Detail from './src/component/Detail';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Todo from './src/screens/Todo';
import demo from './src/component/demo';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Detail', () => Detail);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Todo', () => Todo);
Navigation.registerComponent('demo', () => demo);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Login',
      },
    },
  });
});
