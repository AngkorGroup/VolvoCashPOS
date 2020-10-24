import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PresentialStack from './PresentialNavigation';
import { HOME_SCREEN, PRESENTIAL_STACK } from 'utils/routes';

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <MainStack.Screen name={PRESENTIAL_STACK} component={PresentialStack} />
  </MainStack.Navigator>
);

export default MainNavigation;
