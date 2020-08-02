import { createStore, applyMiddleware } from 'redux';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';
// Import the state interface and our combined reducers.
import { ApplicationState, rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

export default createStore<ApplicationState, any, any, any>(rootReducer, composeWithDevTools(applyMiddleware(thunk)));