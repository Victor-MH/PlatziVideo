// Components
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

const routes = [
  {
    exact,
    path: '/',
    component: Home,
  },
  {
    exact,
    path: '/login',
    component: Login,
  },
  {
    exact,
    path: '/register',
    component: Register,
  },
  {
    exact,
    path: '/player/:id',
    component: Player,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
