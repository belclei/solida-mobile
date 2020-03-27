import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import user from './user/sagas';
import address from './address/sagas';
import video from './video/sagas';

export default function* rootSaga() {
  return yield all([auth, user, address, video]);
}
