import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import OnSiteStack from './OnSiteNavigation';
import { HOME_SCREEN, ON_SITE_STACK } from 'utils/routes';

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <MainStack.Screen name={ON_SITE_STACK} component={OnSiteStack} />
  </MainStack.Navigator>
);

export default MainNavigation;
