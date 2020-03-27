import React, { useEffect, useState } from 'react';
import { Linking, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import { Container, List, Message, A } from './styles';
import api from '~/services/api';
import Video from '~/components/Video';

function Videos({ navigation, isFocused }) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function loadVideoList() {
      const response = await api.get('partner_videos');
      setVideoList(response.data);
    }
    if (isFocused) {
      loadVideoList();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        {videoList ? (
          <List
            data={videoList}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => {
              return <Video data={item} navigation={navigation} />;
            }}
          />
        ) : (
          <Text>Não rolou</Text>
        )}
      </Container>
    </Background>
  );
}

Videos.navigationOptions = ({ navigation }) => {
  return {
    title: 'Vídeos',
  };
};
export default withNavigationFocus(Videos);
