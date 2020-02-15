import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'solida_fasolo',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'address'],
    },
    reducers
  );

  return persistedReducer;
};
