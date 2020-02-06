import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function Videos() {
  return <Background />;
}

Videos.navigationOptions = {
  tabBarLabel: 'Vídeos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="video-camera" size={20} color={tintColor} />
  ),
};
