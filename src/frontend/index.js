import React from 'react';
// Funciona para empujar lo que hagamos con react al nav
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import reducer from './reducers';
// Components
import App from './routes/App';

const history = createBrowserHistory();

const preloadedState = window.__PRELOADED_STATE__;

// Conectar con Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

// Recibe el componente y donde va a insertarlo
ReactDom.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
