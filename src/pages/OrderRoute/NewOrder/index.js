import React, { useState, useMemo } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import Background from '~/components/Background';
import api from '~/services/api';

import { Container, Tip, Label, FormAmountInput, SubmitButton } from './styles';

export default function NewOrder({ navigation }) {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(0);
  const [amount, setAmount] = useState(0);

  useMemo(() => {
    async function loadForms() {
      const response = await api.get('partner_forms');
      const dropdownForms = response.data.map(item => {
        return { label: item.title, value: item.id };
      });
      setForms(dropdownForms);
    }
    loadForms();
  }, []);

  async function handleSubmit() {
    try {
      if (selectedForm === 0) {
        Alert.alert('Selecione o formulário desejado!');
        return;
      }
      if (!parseInt(amount)) {
        Alert.alert('A quantidade precisa ser numérica e positiva!');
        return;
      }
      if (amount < 1) {
        Alert.alert('A quantidade precisa ser positiva!');
        return;
      }

      await api.post('partner_form_order', {
        form_id: selectedForm,
        amount,
      });
      Alert.alert('Sucesso!', 'Sua solicitação foi realizada');
      navigation.goBack();
    } catch (err) {
      console.tron.error(err);
      Alert.alert(
        'Falha na solicitação',
        'Houve um erro na solicitação do formulário, verifique seus dados.'
      );
    }
  }

  return (
    <Background>
      <Container>
        <Tip>
          Preencha abaixo o endereço e as quantidades de formulários que deseja
        </Tip>
        <Dropdown
          label="Nome do formulário"
          baseColor="#FFF"
          textColor="#FFF"
          selectedItemColor="#222"
          onChangeText={value => setSelectedForm(value)}
          containerStyle={{
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 5,
          }}
          data={forms}
          itemCount={forms.length}
          dropdownPosition={0}
        />
        <Label>Quantidade:</Label>
        <FormAmountInput
          placeholder="000"
          keyboardType="number-pad"
          returnKeyType="next"
          maxLength={3}
          onChangeText={setAmount}
        />
        <Label>Endereço:</Label>
        <SubmitButton onPress={handleSubmit}>Solicitar</SubmitButton>
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
