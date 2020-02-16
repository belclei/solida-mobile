import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Title, Major, Minor, Time, Details } from './styles';

export default function Order({ data }) {
  const createdAt = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: ptBR,
    });
  }, [data.createdAt]);
  const approvedAt = useMemo(() => {
    return data.approved_at
      ? formatRelative(parseISO(data.approved_at), new Date(), {
          locale: ptBR,
        })
      : null;
  }, [data.approved_at]);
  const sentAt = useMemo(() => {
    return data.sent_at
      ? formatRelative(parseISO(data.sent_at), new Date(), {
          locale: ptBR,
        })
      : null;
  }, [data.sent_at]);

  let icon = null;
  let opaco = false;
  if (data.sent) {
    icon = <Icon name="send" size={20} color="#666" />;
    opaco = true;
  } else if (data.approved !== null) {
    if (data.approved) {
      icon = <Icon name="check" size={20} color="#008000" />;
    } else {
      icon = <Icon name="times" size={20} color="#f64c75" />;
      opaco = true;
    }
  }
  const address = data.number
    ? `${data.address}, ${data.number}`
    : data.address;

  return (
    <Container opaco={opaco}>
      <Details>
        <Major>
          {data.amount} <Title>{data.form.title}</Title>
        </Major>
        {!!address && <Minor>{address}</Minor>}
        <Time>Criação: {createdAt}</Time>
        {approvedAt && <Time>Conferência: {approvedAt}</Time>}
        {sentAt && <Time>Envio: {sentAt}</Time>}
      </Details>
      {icon}
    </Container>
  );
}
