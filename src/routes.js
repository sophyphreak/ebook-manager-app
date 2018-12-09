import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const PromoSubmitter = React.lazy(() => import('./containers/PromoSubmitter/PromoSubmitter'));
const ListingGenerator = React.lazy(() => import('./containers/ListingGenerator/ListingGenerator'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/promo-submitter', exact: true, name: 'Promotion Submitter', component: PromoSubmitter },
  { path: '/listing-generator', exact: true, name: 'Listing Generator', component: ListingGenerator },
  // { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  // { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
