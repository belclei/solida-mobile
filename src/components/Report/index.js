import React from 'react';

import { Container, Title, Origin } from './styles';

export default function Report({ title, origin }) {
  return (
    <Container>
      <Title>Título: {title}</Title>
      <Origin>Origem: {origin}</Origin>
    </Container>
  );
}
