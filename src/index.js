import React from 'react';
// Funciona para empujar lo que hagamos con react al nav
import ReactDom from "react-dom";
// Components
import App from './containers/App';

// Recibe el componente y donde va a insertarlo
ReactDom.render(<App />, document.getElementById('app'));

