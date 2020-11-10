import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from 'utils/redux/rootReducer';
import InitScreen from './src/App';

const App = () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(rootReducer, middleware);
  return (
    <Provider store={store}>
      <InitScreen />
    </Provider>
  );
};

export default App;
