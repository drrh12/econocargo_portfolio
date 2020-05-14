import React from 'react';
import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const LoginPage = Loadable({
  loader: () => import('./components/dashboard/LoginPage')
})


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/login', name: 'LoginPage', component: LoginPage }
];

export default routes;
