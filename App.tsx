import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.style';
import { LoginScreen } from './app/screens/login/login.screen';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
};

export default App;