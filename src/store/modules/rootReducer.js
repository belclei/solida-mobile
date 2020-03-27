import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import address from './address/reducer';
import video from './video/reducer';

export default combineReducers({ auth, user, address, video });
