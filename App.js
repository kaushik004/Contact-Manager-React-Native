/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './source/navigations';
import GlobalProvider from './source/context/Provider';

const App = () => {
  
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
