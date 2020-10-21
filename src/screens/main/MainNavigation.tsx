import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { HOME_SCREEN } from 'utils/routes';

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
  </MainStack.Navigator>
);

export default MainNavigation;
