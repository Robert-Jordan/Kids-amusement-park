import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux';
import createStore from './services/store/configureStore';

ReactDOM.render(
  <ReduxProvider store={createStore}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);