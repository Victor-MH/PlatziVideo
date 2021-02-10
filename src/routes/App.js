import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components
import Home from "../containers/Home";
import Login from '../containers/Login';
import Register from '../containers/Register'
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={ Home }></Route>
                <Route exact path="/login" component={ Login } />
                <Route exact path="/register" component={ Register } />
                <Route component={ NotFound }></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;