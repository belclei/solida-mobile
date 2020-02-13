import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

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
`;

export const Label = styled.Text`
  margin-top: 10px;
  padding: 0 20px;
  font-size: 16px;
  color: #fff;
`;

export const SubmitButton = styled(Button)`
  margin: 5px 20px;
`;
