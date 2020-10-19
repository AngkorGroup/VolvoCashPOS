import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import ReactNativeSplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/utils/navigation';
import AuthLoading from './src/screens/auth/AuthLoading';
import { LogBox } from 'react-native';
// import { Provider as AuthProvider } from './src/context/auth';

LogBox.ignoreLogs(['Sending onAnimatedValueUpdate']);

const App = () => {
  useEffect(() => {
    ReactNativeSplashScreen.hide();
  }, []);

  return (
    // <AuthProvider>
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <AuthLoading />
      </NavigationContainer>
    </SafeAreaProvider>
    // </AuthProvider>
  );
};

export default App;
