import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../coreui/Header/Header';
import Sidebar from '../../coreui/Sidebar/Sidebar';
import Breadcrumb from '../../coreui/Breadcrumb/Breadcrumb';
import Aside from '../../coreui/Aside/Aside';
import Footer from '../../coreui/Footer/Footer';

import Dashboard from '../../views/Dashboard/Dashboard';
import PromoSubmitter from '../PromoSubmitter/PromoSubmitter';
import FormTests from '../../playground/FormTests';
import FormTests2 from '../../playground/FormTests2';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/promo-submitter" name="Promo Submitter" component={PromoSubmitter}/>
                <Route path="/playground" name="Playground" component={FormTests} />
                <Route path="/playground2" name="Playground2" component={FormTests2}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
