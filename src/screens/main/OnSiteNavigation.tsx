import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  QR_SCREEN,
  ON_SITE_PAYMENT,
  ON_SITE_SUCCESS_SCREEN,
} from 'utils/routes';
import CardListScreen from 'screens/main/OnSite/Payment';
import ConfirmationScreen from 'screens/main/OnSite/Confirmation';
import QRScreen from 'screens/main/OnSite/QR';

const CardStack = createStackNavigator();

const OnSiteNavigation = () => (
  <CardStack.Navigator headerMode="none">
    <CardStack.Screen name={ON_SITE_PAYMENT} component={CardListScreen} />
    <CardStack.Screen name={QR_SCREEN} component={QRScreen} />
    <CardStack.Screen
      name={ON_SITE_SUCCESS_SCREEN}
      component={ConfirmationScreen}
    />
  </CardStack.Navigator>
);

export default OnSiteNavigation;
