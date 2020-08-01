import { createStore, applyMiddleware, Store } from 'redux';
// react-router has its own Redux middleware, so we'll use this
import { routerMiddleware } from 'react-router-redux';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';
//If you use react-router, don't forget to pass in your history type.
// import { History } from 'history';
// Import the state interface and our combined reducers.
import { ApplicationState, rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

export default createStore<ApplicationState, any, any, any>(rootReducer, composeWithDevTools(applyMiddleware(thunk)
  // , routerMiddleware(history)
  ));

  // export default function configureStore(
  //   // history: History,
  //   initialState: any,
  // ): Store<ApplicationState> {
  //   const composeEnhancers = composeWithDevTools({});
  //   return createStore<ApplicationState, any, any, any>(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)
  //   // , routerMiddleware(history)
  //   ));
  // }