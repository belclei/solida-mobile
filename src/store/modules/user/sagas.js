import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, ...rest } = payload.data;

    const profile = {
      name,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'partner', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
