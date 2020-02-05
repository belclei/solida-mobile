import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignUp from './pages/SignUp';
import Reports from './pages/Reports';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignUp }),
        App: createBottomTabNavigator(
          {
            Reports,
          },
          {
            tabBarOptions: {
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
              style: {
                backgroundColor: '#7159cc',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
