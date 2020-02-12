import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import Background from '~/components/Background';
import { Container } from './styles';

export default function Orders() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

Orders.navigationOptions = ({ navigation }) => {
  return {
    title: 'Pedidos',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewOrder');
        }}
      >
        <Icon name="plus" size={20} color="#FFF" />
      </TouchableOpacity>
    ),
  };
};
