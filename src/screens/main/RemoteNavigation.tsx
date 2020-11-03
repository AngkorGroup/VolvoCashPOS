import React from 'react';
import PaymentScreen from 'screens/main/Remote/Payment';
import { createStackNavigator } from '@react-navigation/stack';
import { REMOTE_STACK, REMOTE_CONFIRMATION_SCREEN } from 'utils/routes';
import ConfirmationScreen from './Remote/Confirmation';

const RemoteStack = createStackNavigator();

const RemoteNavigation = () => (
  <RemoteStack.Navigator headerMode="none">
    <RemoteStack.Screen name={REMOTE_STACK} component={PaymentScreen} />
    <RemoteStack.Screen
      name={REMOTE_CONFIRMATION_SCREEN}
      component={ConfirmationScreen}
    />
  </RemoteStack.Navigator>
);

export default RemoteNavigation;
