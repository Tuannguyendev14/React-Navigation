/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Home from './src/component/Home';
import Detail from './src/component/Detail';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Detail', () => Detail);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
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
      },
    },
  });
});
