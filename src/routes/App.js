import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Home from "../containers/Home";
import Login from '../containers/Login';
import Register from '../containers/Register'
import NotFound from '../containers/NotFound';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route component={ NotFound }></Route>
        </Switch>
    </BrowserRouter>
);

export default App;