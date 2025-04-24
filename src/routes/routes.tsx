import React from 'react';
import Dashboard from '../pages/Dashboard';
import Clients from '../pages/Clients';
import Invoices from '../pages/Invoices';
import Login from '../pages/Login';

interface Route {
  path: string;
  component: React.FC;
  exact?: boolean;
}

const routes: Route[] = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/clients',
    component: Clients,
    exact: true,
  },
  {
    path: '/invoices',
    component: Invoices,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

export default routes;