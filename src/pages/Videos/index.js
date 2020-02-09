import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';
import Background from '~/components/Background';
import { Container, Title, Message, A } from './styles';

export default function Videos() {
  return (
    <Background>
      <Container>
        <Title>Vídeos</Title>
        <Message>
          Em breve você poderá consultar, nesta área, os tutoriais elaborados
          pela equipe Sólida. Enquanto isso,&nbsp;
          <A
            onPress={() =>
              Linking.openURL(
                'https://controledequalidad8.wixsite.com/tutoriaissolida'
              )
            }
          >
            confira no site.
          </A>
        </Message>
      </Container>
    </Background>
  );
}

Videos.navigationOptions = {
  tabBarLabel: 'Vídeos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="video-camera" size={20} color={tintColor} />
  ),
};
