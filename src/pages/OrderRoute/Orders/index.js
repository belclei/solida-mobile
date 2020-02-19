import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import Order from '~/components/Order';
import { Container, List } from './styles';
import api from '~/services/api';

function Orders({ isFocused }) {
  const [orders, setOrders] = useState([]);

  async function loadOrders() {
    const response = await api.get('partner_form_order');
    setOrders(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadOrders();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <List
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return <Order data={item} />;
          }}
        />
      </Container>
    </Background>
  );
}

Orders.navigationOptions = ({ navigation }) => {
  return {
    title: 'Pedidos',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewOrder');
        }}
      >
        <Icon name="plus" size={20} color="#FFF" />
      </TouchableOpacity>
    ),
  };
};

export default withNavigationFocus(Orders);
