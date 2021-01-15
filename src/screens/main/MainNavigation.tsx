import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import OnSiteStack from './OnSiteNavigation';
import RemoteStack from './RemoteNavigation';
import DetailScreen from './DetailScreen';
import {
  HOME_SCREEN,
  ON_SITE_STACK,
  REMOTE_STACK,
  CHARGE_DETAIL,
  SETTINGS_PROFILE_SCREEN,
  RESET_PASSWORD_SCREEN,
} from 'utils/routes';
import ProfileScreen from './ProfileScreen';
import ResetPasswordScreen from './ResetPasswordScreen';

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <MainStack.Screen name={ON_SITE_STACK} component={OnSiteStack} />
    <MainStack.Screen name={REMOTE_STACK} component={RemoteStack} />
    <MainStack.Screen name={CHARGE_DETAIL} component={DetailScreen} />
    <MainStack.Screen name={SETTINGS_PROFILE_SCREEN} component={ProfileScreen} />
    <MainStack.Screen name={RESET_PASSWORD_SCREEN} component={ResetPasswordScreen} />
  </MainStack.Navigator>
);

export default MainNavigation;
