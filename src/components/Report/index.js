import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Title, Origin, Time, Details } from './styles';

export default function Report({ data, navigation }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.updatedAt), new Date(), {
      locale: pt,
    });
  }, [data.updatedAt]);
  return (
    <Container
      onPress={() => navigation.navigate('ReportDetail', { data, dateParsed })}
    >
      <Title>{data.title}</Title>
      <Details>
        <Origin>{data.origin}</Origin>
        <Time>{dateParsed}</Time>
      </Details>
    </Container>
  );
}
