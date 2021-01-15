import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import {
  FORGOT_PASSWORD_SCREEN,
  LOGIN_SCREEN,
  CHANGE_PASSWORD_SCREEN,
} from 'utils/routes';
import ChangePasswordScreen from './ChangePasswordScreen';

const LoginStack = createStackNavigator();

const LoginNavigation = () => (
  <LoginStack.Navigator headerMode="none">
    <LoginStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <LoginStack.Screen
      name={FORGOT_PASSWORD_SCREEN}
      component={ForgotPasswordScreen}
    />
    <LoginStack.Screen
      name={CHANGE_PASSWORD_SCREEN}
      component={ChangePasswordScreen}
    />
  </LoginStack.Navigator>
);

export default LoginNavigation;
