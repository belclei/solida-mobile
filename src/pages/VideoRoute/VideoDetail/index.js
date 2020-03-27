import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from './styles';
import Background from '~/components/Background';

export default function VideoDetail({ navigation }) {
  const data = navigation.getParam('data');

  const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 85,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'transparent',
    },
  });
  return (
    <Background>
      <Container>
        <Video
          source={{ uri: data.link }}
          style={styles.backgroundVideo}
          controls
          resizeMode="contain"
        />
      </Container>
    </Background>
  );
}
VideoDetail.navigationOptions = ({ navigation }) => {
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
