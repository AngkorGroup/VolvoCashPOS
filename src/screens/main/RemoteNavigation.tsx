import React from 'react';
import PaymentScreen from 'screens/main/Remote/Payment';
import { createStackNavigator } from '@react-navigation/stack';
import { REMOTE_STACK } from 'utils/routes';

const RemoteStack = createStackNavigator();

const RemoteNavigation = () => (
  <RemoteStack.Navigator headerMode="none">
    <RemoteStack.Screen
      name={REMOTE_STACK}
      component={PaymentScreen}
    />
  </RemoteStack.Navigator>
);

export default RemoteNavigation;
