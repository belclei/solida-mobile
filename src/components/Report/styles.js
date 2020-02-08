import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin-top: 15px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const Details = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const Origin = styled.Text`
  flex: 1;
  color: #999;
  font-size: 13px;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
`;
