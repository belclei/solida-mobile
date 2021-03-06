import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import { Container, List } from './styles';
import Report from '~/components/Report';
import api from '~/services/api';

function Reports({ navigation, isFocused }) {
  const [reports, setReports] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState(null);

  function filterOrigins(reportList) {
    return reportList.reduce(
      (unique, item) => {
        const aux = { label: item.origin, value: item.origin };
        return unique.some(obj => obj.value === aux.value)
          ? unique
          : [...unique, aux];
      },
      [{ label: 'Todos', value: null }]
    );
  }

  useEffect(() => {
    async function loadReports() {
      const response = await api.get('partner_reports', {
        params: {
          origin: selectedOrigin,
        },
      });
      setReports(response.data);
      setOrigins(filterOrigins(response.data));
    }
    if (isFocused) {
      loadReports();
    }
  }, [isFocused, selectedOrigin]);

  return (
    <Background>
      <Container>
        <Dropdown
          label="Filtrar por origem"
          baseColor="#FFF"
          textColor="#FFF"
          selectedItemColor="#222"
          onChangeText={value => setSelectedOrigin(value)}
          containerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          data={origins}
          itemCount={origins.length}
          dropdownPosition={0}
        />
        <List
          data={reports}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return <Report data={item} navigation={navigation} />;
          }}
        />
      </Container>
    </Background>
  );
}

Reports.navigationOptions = ({ navigation }) => {
  return {
    title: 'Comunicados',
  };
};

export default withNavigationFocus(Reports);
