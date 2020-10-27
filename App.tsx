import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import ReactNativeSplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './src/utils/navigation';
import AuthLoading from './src/screens/auth/AuthLoading';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from 'utils/redux/rootReducer';
// import store from './src/redux/store';

LogBox.ignoreLogs(['Sending onAnimatedValueUpdate']);
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

const App = () => {
  useEffect(() => {
    ReactNativeSplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <AuthLoading />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
