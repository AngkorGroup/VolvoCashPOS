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
} from 'utils/routes';

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <MainStack.Screen name={ON_SITE_STACK} component={OnSiteStack} />
    <MainStack.Screen name={REMOTE_STACK} component={RemoteStack} />
    <MainStack.Screen name={CHARGE_DETAIL} component={DetailScreen} />
  </MainStack.Navigator>
);

export default MainNavigation;
