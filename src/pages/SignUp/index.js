import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/Background';
import Logo from '~/components/Logo';

import { Container, Form, FormInput, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(code, password));
  }
  return (
    <Background>
      <Container>
        <Logo />
        <Form>
          <FormInput
            icon="user"
            keyboardType="decimal-pad"
            autoCorrect={false}
            placeholder="Informe seu código"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={code}
            onChangeText={setCode}
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Informe sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
