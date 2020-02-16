import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 15px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.opaco ? 0.6 : 1)};
`;

export const Details = styled.View`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
`;
export const Major = styled.Text`
  flex: 1;
  color: #333;
  font-size: 16px;
  margin-bottom: 2px;
`;
export const Minor = styled.Text`
  flex: 1;
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 11px;
`;
