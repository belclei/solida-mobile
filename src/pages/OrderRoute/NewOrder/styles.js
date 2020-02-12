import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Tip = styled.Text`
  margin-top: 50px;
  padding: 0 20px;
  color: #fff;
`;
export const LineForm = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
export const FormAmountInput = styled(Input)`
  margin: 5px 20px;
  padding: 0;
  width: 50px;
`;
