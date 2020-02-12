import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from '~/components/Background';

import api from '~/services/api';
import { Container, FormAmountInput, Tip, LineForm } from './styles';

export default function NewOrder() {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState({});
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    async function loadForms() {
      const response = await api.get('partner_forms');
      setForms(
        response.data.map(item => {
          return { label: item.title, value: item.id };
        })
      );
    }
    loadForms();
  }, [forms]);

  return (
    <Background>
      <Container>
        <Tip>
          Preencha abaixo o endereço e as quantidades de formulários que deseja
        </Tip>
        <LineForm>
          <Dropdown
            label="Nome do formulário"
            baseColor="#FFF"
            textColor="#FFF"
            selectedItemColor="#222"
            onChangeText={setSelectedForm}
            containerStyle={{
              flex: 1,
              paddingLeft: 20,
              marginTop: 20,
              marginBottom: 5,
            }}
            data={forms}
            itemCount={forms.length}
            dropdownPosition={0}
          />
          <FormAmountInput
            placeholder="00"
            defaultValue="00"
            keyboardType="number-pad"
            returnKeyType="next"
            maxLength={3}
            value={amount}
            onChangeText={setAmount}
          />
        </LineForm>
      </Container>
    </Background>
  );
}

NewOrder.navigationOptions = ({ navigation }) => {
  return {
    title: 'Novo Pedido',
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={20} color="#FFF" />
      </TouchableOpacity>
    ),
  };
};
