import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransfersScreen from './TransfersScreen';
import { TRANSFERS_SCREEN } from '../../utils/routes';

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name={TRANSFERS_SCREEN} component={TransfersScreen} />
  </MainStack.Navigator>
);

export default MainNavigation;
