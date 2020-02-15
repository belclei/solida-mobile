import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import address from './address/reducer';

export default combineReducers({ auth, user, address });
