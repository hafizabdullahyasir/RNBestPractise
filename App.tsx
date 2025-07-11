import './wdyr';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  if (!__DEV__) {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );

  
  
  



}


