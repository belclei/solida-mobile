import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalIndicator: false,
  contentContainerStyle: { padding: 20 },
})`
  margin-top: 50px;
`;
