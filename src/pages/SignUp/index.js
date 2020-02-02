import React, { useRef } from 'react';
import Background from '~/components/Background';
import Logo from '~/components/Logo';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignUp() {
  const passwordRef = useRef();
  function handleSubmit() {}
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
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Informe sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
