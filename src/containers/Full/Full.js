import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../coreui/Header/Header';
import Sidebar from '../../coreui/Sidebar/Sidebar';
import Breadcrumb from '../../coreui/Breadcrumb/Breadcrumb';
import Footer from '../../coreui/Footer/Footer';

import Dashboard from '../../views/Dashboard/Dashboard';
import PromoSubmitter from '../PromoSubmitter/PromoSubmitter';
import MediaSubmitter from '../MediaSubmitter/MediaSubmitter';
import ReleaseSubmitter from '../ReleaseSubmitter/ReleaseSubmitter';
import AlertsSubmitter from '../AlertsSubmitter/AlertsSubmitter';
import SalesEstimator from '../SalesEstimator/SalesEstimator';
import ListingGenerator from '../ListingGenerator/ListingGenerator';
import NotFoundPage from '../../views/NotFoundPage';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route
                  path="/dashboard"
                  name="Dashboard"
                  component={Dashboard}
                />
                <Route
                  path="/promo-submitter"
                  name="Promo Submitter"
                  component={PromoSubmitter}
                />
                <Route
                  path="/social-media-submitter"
                  name="Social Media Submitter"
                  component={MediaSubmitter}
                />
                <Route
                  path="/press-release-submitter"
                  name="Press Release Submitter"
                  component={ReleaseSubmitter}
                />
                <Route
                  path="/alerts-submitter"
                  name="Alerts Submitter"
                  component={AlertsSubmitter}
                />
                <Route
                  path="/sales-estimator"
                  name="Sales Estimator"
                  component={SalesEstimator}
                />
                <Route
                  path="/listing-generator"
                  name="Listing Genenerator"
                  component={ListingGenerator}
                />
                <Redirect from="/" to="/dashboard" exact={true} />
                <Route component={NotFoundPage} />
              </Switch>
            </Container>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
