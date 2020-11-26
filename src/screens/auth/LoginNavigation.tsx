import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { FORGOT_PASSWORD_SCREEN, LOGIN_SCREEN } from 'utils/routes';

const LoginStack = createStackNavigator();

const LoginNavigation = () => (
  <LoginStack.Navigator headerMode="none">
    <LoginStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <LoginStack.Screen
      name={FORGOT_PASSWORD_SCREEN}
      component={ForgotPasswordScreen}
    />
  </LoginStack.Navigator>
);

export default LoginNavigation;
