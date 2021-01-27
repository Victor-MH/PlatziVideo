import React from 'react';
// Funciona para empujar lo que hagamos con react al nav
import ReactDom from "react-dom";
// Components
import HelloWorld from './components/HelloWorld';

// Recibe el componente y donde va a insertarlo
ReactDom.render(<HelloWorld/>, document.getElementById('app'));

