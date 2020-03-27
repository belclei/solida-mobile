import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUp from './pages/SignUp';
import Videos from './pages/VideoRoute/Videos';
import VideoDetail from './pages/VideoRoute/VideoDetail';
import Orders from './pages/OrderRoute/Orders';
import NewOrder from './pages/OrderRoute/NewOrder';
import Profile from './pages/Profile';
import Reports from './pages/ReportRoute/Reports';
import ReportDetail from './pages/ReportRoute/ReportDetail';

export default (signed = false, profile = null) => {
  let initialRoute = 'Sign';
  if (signed && profile !== null) {
    if (profile.password_expired) {
      initialRoute = 'Profile';
    } else {
      initialRoute = 'App';
    }
  }
  return createAppContainer(
    createSwitchNavigator(
      {
        Profile,
        Sign: createSwitchNavigator({ SignUp }),
        App: createBottomTabNavigator(
          {
            ReportRoute: {
              screen: createStackNavigator(
                { Reports, ReportDetail },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Comunicados',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="bullhorn" size={20} color={tintColor} />
                ),
              },
            },
            VideoRoute: {
              screen: createStackNavigator(
                { Videos, VideoDetail },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerRightContainerStyle: {
                      marginRight: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Vídeos',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="video-camera" size={20} color={tintColor} />
                ),
              },
            },
            OrderRoute: {
              screen: createStackNavigator(
                { Orders, NewOrder },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerRightContainerStyle: {
                      marginRight: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: 'Pedidos',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="list" size={20} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
              style: {
                backgroundColor: '#7159cc',
              },
            },
            initialRouteName: 'ReportRoute',
          }
        ),
      },
      {
        initialRouteName: initialRoute,
      }
    )
  );
};
