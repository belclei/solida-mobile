import React, { useState, useMemo, useRef } from 'react';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  View,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import Background from '~/components/Background';
import api from '~/services/api';
import { saveAddress } from '~/store/modules/address/actions';

import {
  Container,
  Tip,
  Label,
  FormAmountInput,
  SubmitButton,
  Form,
} from './styles';

export default function NewOrder({ navigation }) {
  const dispatch = useDispatch();

  const _address = useSelector(state => state.address.address);
  const _number = useSelector(state => state.address.number);
  const _compl = useSelector(state => state.address.compl);
  const _city = useSelector(state => state.address.city);
  const _UF = useSelector(state => state.address.UF);
  const _CEP = useSelector(state => state.address.CEP);

  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(0);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState(_address || '');
  const [number, setNumber] = useState(_number || '');
  const [compl, setCompl] = useState(_compl || '');
  const [city, setCity] = useState(_city || '');
  const [UF, setUF] = useState(_UF || '');
  const [CEP, setCEP] = useState(_CEP || '');

  const amountRef = useRef();
  const addressRef = useRef();
  const numberRef = useRef();
  const cityRef = useRef();
  const complRef = useRef();
  const UFRef = useRef();
  const CEPRef = useRef();

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
      dispatch(saveAddress(address, number, compl, city, UF, CEP));
      navigation.goBack();
    } catch (err) {
      console.tron.error(err);
      Alert.alert(
        'Falha na solicitação',
        'Houve um erro na solicitação do formulário, verifique seus dados.'
      );
    }
  }
  function handleCEPChanges(value) {
    // Remove todos os caracteres não numéricos
    let newValue = value.replace(/\D/g, '');
    // Inclui hífen após o 5º número
    newValue = newValue.replace(/(\d{5})(\d)/, '$1-$2');
    setCEP(newValue);
  }
  return (
    <Background>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <ScrollView style={{ flex: 1 }}>
            <Tip>
              Preencha abaixo o endereço e as quantidades de formulários que
              deseja
            </Tip>
            <Form>
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
              <Label>Quantidade de formulários:</Label>
              <FormAmountInput
                placeholder="000"
                keyboardType="number-pad"
                returnKeyType="next"
                maxLength={3}
                onChangeText={setAmount}
                ref={amountRef}
                onSubmitEditing={() => addressRef.current.focus()}
              />
              <Label>Endereço de destino:</Label>
              <FormAmountInput
                placeholder="Endereço"
                autoCorrect={false}
                autoCapitalize="words"
                ref={addressRef}
                returnKeyType="next"
                onSubmitEditing={() => numberRef.current.focus()}
                value={address}
                onChangeText={setAddress}
              />
              <FormAmountInput
                placeholder="Número"
                maxLength={5}
                keyboardType="number-pad"
                ref={numberRef}
                returnKeyType="next"
                onSubmitEditing={() => complRef.current.focus()}
                value={number}
                onChangeText={setNumber}
              />
              <FormAmountInput
                placeholder="Complemento"
                autoCorrect={false}
                ref={complRef}
                returnKeyType="next"
                onSubmitEditing={() => cityRef.current.focus()}
                value={compl}
                onChangeText={setCompl}
              />
              <FormAmountInput
                placeholder="Cidade"
                ref={cityRef}
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => UFRef.current.focus()}
                value={city}
                onChangeText={setCity}
              />
              <FormAmountInput
                placeholder="UF"
                maxLength={2}
                autoCorrect={false}
                autoCapitalize="characters"
                ref={UFRef}
                returnKeyType="next"
                onSubmitEditing={() => CEPRef.current.focus()}
                value={UF}
                onChangeText={setUF}
              />
              <FormAmountInput
                placeholder="CEP"
                keyboardType="number-pad"
                maxLength={9}
                ref={CEPRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={CEP}
                onChangeText={handleCEPChanges}
              />
              <SubmitButton onPress={handleSubmit}>Solicitar</SubmitButton>
              <View style={{ flex: 1 }} />
            </Form>
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
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
