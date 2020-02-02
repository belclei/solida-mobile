import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignUp,
  })
);
