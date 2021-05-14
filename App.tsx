import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.style';
import AddressScreen from './app/screens/address/address.screen';
import DeliveriesScreen from './app/screens/deliveries/deliveries.screen';
import DeliveryScreen from './app/screens/delivery/delivery.screen';
import HomeScreen from './app/screens/home/home.screen';
import { LoginScreen } from './app/screens/login/login.screen';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <DeliveriesScreen />
    </PaperProvider>
  );
};

export default App;