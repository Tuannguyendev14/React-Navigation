/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Demo from './src/demo';

Navigation.registerComponent('demo', () => Demo);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'demo',
      },
    },
  });
});
