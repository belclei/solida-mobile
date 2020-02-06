import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';
import { Container, Title } from './styles';

export default function Orders() {
  return (
    <Background>
      <Container>
        <Title>Pedidos</Title>
      </Container>
    </Background>
  );
}

Orders.navigationOptions = {
  tabBarLabel: 'Pedidos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="tasks" size={20} color={tintColor} />
  ),
};
