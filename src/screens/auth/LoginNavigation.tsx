import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import * as routes from 'utils/routes';

const LoginStack = createStackNavigator();

const LoginNavigation = () => (
  <LoginStack.Navigator headerMode="none">
    <LoginStack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
  </LoginStack.Navigator>
);

export default LoginNavigation;
