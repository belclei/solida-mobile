import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

export default function Reports() {
  return <View />;
}

Reports.navigationOptions = {
  tabBarLabel: 'Comunicados',
  tabBatIcon: ({ tintColor }) => (
    <Icon name="bullhorn" size={20} color={tintColor} />
  ),
};
