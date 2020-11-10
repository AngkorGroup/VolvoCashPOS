import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import ReactNativeSplashScreen from 'react-native-splash-screen';
import AuthLoading from './screens/auth/AuthLoading';
import { LogBox } from 'react-native';
import OneSignal from 'react-native-onesignal';
import { useDispatch } from 'react-redux';
import { setAuth } from 'utils/redux/auth/actions';
import { setChargeId } from 'utils/redux/chargeId/actions';
import { setPushToken } from 'utils/redux/pushToken/actions';
import { getUserToken } from 'utils/storage';
import { PUSH_TOKEN } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef, navigate } from './utils/navigation';
import { CHARGE_DETAIL } from 'utils/routes';

LogBox.ignoreLogs(['Sending onAnimatedValueUpdate']);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ReactNativeSplashScreen.hide();
    OneSignal.init(PUSH_TOKEN);
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    getUserToken().then((token) => {
      dispatch(setAuth(Boolean(token)));
    });

    return () => {
      OneSignal.removeEventListener('opened', onReceived);
      OneSignal.removeEventListener('ids', onOpened);
      OneSignal.removeEventListener('received', onIds);
    };
  }, []);

  function onOpened() { }

  function onIds(device: any) {
    dispatch(setPushToken(device.userId));
  }

  function onReceived(notification: any) {
    const push = notification.payload?.additionalData;
    if (push && push.chargeId) {
      dispatch(setChargeId(push.chargeId));
      navigate(CHARGE_DETAIL);
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <AuthLoading />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
