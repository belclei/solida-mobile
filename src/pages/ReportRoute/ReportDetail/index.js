import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';

import { Container, A, Header, Origin, Content, Time } from './styles';

export default function ReportDetail({ navigation }) {
  const data = navigation.getParam('data');
  const dateParsed = navigation.getParam('dateParsed');
  return (
    <Background>
      <Container>
        <Header>
          <Origin>{data.origin}</Origin>
          {!!data.link && (
            <A onPress={() => Linking.openURL(data.link)}>Ver no site</A>
          )}
        </Header>
        <Content>{data.content}</Content>
        <Time>{dateParsed}</Time>
      </Container>
    </Background>
  );
}

ReportDetail.navigationOptions = ({ navigation }) => {
  const data = navigation.getParam('data');
  return {
    title: data.title,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={20} color="#FFF" />
      </TouchableOpacity>
    ),
  };
};
