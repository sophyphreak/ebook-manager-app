import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const PromoSubmitter = React.lazy(() => import('./containers/PromoSubmitter/PromoSubmitter'));
const MediaSubmitter = React.lazy(() => import('./containers/MediaSubmitter/MediaSubmitter'));
const ReleaseSubmitter = React.lazy(() => import('./containers/ReleaseSubmitter/ReleaseSubmitter'));
const AlertsSubmitter = React.lazy(() => import('./containers/AlertsSubmitter/AlertsSubmitter'));
const SalesEstimator = React.lazy(() => import('./containers/SalesEstimator/SalesEstimator'));
const ListingGenerator = React.lazy(() => import('./containers/ListingGenerator/ListingGenerator'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/promo-submitter', exact: true, name: 'Promotion Submitter', component: PromoSubmitter },
  { path: '/social-media-submitter', exact: true, name: 'Social Media Submitter', component: MediaSubmitter },
  { path: '/press-release-submitter', exact: true, name: 'Press Release Submitter', component: ReleaseSubmitter },
  { path: '/alerts-submitter', exact: true, name: 'Alerts Submitter', component: AlertsSubmitter },
  { path: '/sales-estimator', exact: true, name: 'Sales Estimator', component: SalesEstimator },
  { path: '/listing-generator', exact: true, name: 'Listing Generator', component: ListingGenerator },
];

export default routes;
