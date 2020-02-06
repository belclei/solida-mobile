import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';
import Report from '~/components/Report';

const data = [
  { id: 0, title: 'Título do Comunicado', origin: 'Banrisul' },
  { id: 1, title: 'Título do Comunicado 2', origin: 'Banco Fasolo' },
  { id: 2, title: 'Título do Comunicado 4', origin: 'Itaú' },
];

export default function Reports() {
  return (
    <Background>
      <Container>
        <Title>Comunicados</Title>
        <List
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Report data={item} />}
        />
      </Container>
    </Background>
  );
}

Reports.navigationOptions = {
  tabBarLabel: 'Comunicados',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="bullhorn" size={20} color={tintColor} />
  ),
};
