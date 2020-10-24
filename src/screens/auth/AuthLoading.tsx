import React from 'react';
import LoginNavigation from './LoginNavigation';
import MainNavigation from '../main/MainNavigation';
import { LOGIN_STACK, APP_TAB } from 'utils/routes';
import { createStackNavigator } from '@react-navigation/stack';
// import { Context as AuthContext } from '../../context/auth';

const RootStack = createStackNavigator();

const AuthLoading = () => {
  // const { state } = React.useContext(AuthContext);
  const token = false;
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      {/* {!state.token ? ( */}
      {!token ? (
        <RootStack.Screen name={LOGIN_STACK} component={LoginNavigation} />
      ) : (
          <RootStack.Screen name={APP_TAB} component={MainNavigation} />
        )}
    </RootStack.Navigator>
  );
};

export default AuthLoading;
