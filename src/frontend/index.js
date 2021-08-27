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

import initialState from './initialState';

const history = createBrowserHistory();

// Conectar con Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

// Recibe el componente y donde va a insertarlo
ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
