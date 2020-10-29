import React from 'react';
import LoginNavigation from './LoginNavigation';
import MainNavigation from '../main/MainNavigation';
import { LOGIN_STACK, APP_TAB } from 'utils/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from 'utils/redux/auth/reducer';

const RootStack = createStackNavigator();

const AuthLoading = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      {/* {!state.token ? ( */}
      {!isAuthenticated ? (
        <RootStack.Screen name={LOGIN_STACK} component={LoginNavigation} />
      ) : (
          <RootStack.Screen name={APP_TAB} component={MainNavigation} />
        )}
    </RootStack.Navigator>
  );
};

export default AuthLoading;
