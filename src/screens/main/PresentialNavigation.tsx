import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QR_SCREEN, PRESENTIAL_PAYMENT } from 'utils/routes';
import CardListScreen from 'screens/main/Presential/Payment';
import QRScreen from 'screens/main/Presential/QR';

const CardStack = createStackNavigator();

const PresentialNavigation = () => (
  <CardStack.Navigator headerMode="none">
    <CardStack.Screen
      name={PRESENTIAL_PAYMENT}
      component={CardListScreen}
    />
    <CardStack.Screen
      name={QR_SCREEN}
      component={QRScreen}
    />
  </CardStack.Navigator>
);

export default PresentialNavigation;
