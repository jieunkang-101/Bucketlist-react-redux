import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from './reducers/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import middlewareLogger from './middleware/middleware-logger';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
// const store = createStore(reducer, composeEnhancer(applyMiddleware(middlewareLogger, thunk)));

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

