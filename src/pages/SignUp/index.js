import React from 'react';
import Background from '~/components/Background';
import Logo from '~/components/Logo';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignUp() {
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
          />
          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Informe sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
