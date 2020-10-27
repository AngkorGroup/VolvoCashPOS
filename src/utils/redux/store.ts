import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

// const middlewares = [thunk];

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middlewares)),
// );

// import { createStore, applyMiddleware } from 'redux';
// middlewares
// import thunk from 'redux-thunk';
// reducers
// import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
