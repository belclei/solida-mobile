import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Form = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 50px;
`;
export const Tip = styled.Text`
  padding: 0 20px;
  color: #fff;
`;
export const FormInput = styled(Input)`
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
