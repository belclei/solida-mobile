import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;

  padding: 15px 20px;
  margin-top: 40px;
`;
export const Origin = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
export const Link = styled.Text`
  font-size: 16px;
  color: #ccc;
  text-decoration-line: underline;
`;
export const Content = styled.Text`
  font-size: 20px;
  color: #ddd;
  margin: 20px;
`;

export const Time = styled.Text`
  align-self: flex-end;
  margin-right: 16
  color: #999;
  font-size: 11px;
`;
