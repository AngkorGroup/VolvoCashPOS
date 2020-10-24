import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QR_SCREEN, PRESENTIAL_PAYMENT, PRESENTIAL_SUCCESS_SCREEN } from 'utils/routes';
import CardListScreen from 'screens/main/Presential/Payment';
import ConfirmationScreen from 'screens/main/Presential/Confirmation';
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
    <CardStack.Screen
      name={PRESENTIAL_SUCCESS_SCREEN}
      component={ConfirmationScreen}
    />
  </CardStack.Navigator>
);

export default PresentialNavigation;
