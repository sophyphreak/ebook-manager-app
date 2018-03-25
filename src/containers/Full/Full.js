import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../coreui/Header/Header';
import Sidebar from '../../coreui/Sidebar/Sidebar';
import Breadcrumb from '../../coreui/Breadcrumb/Breadcrumb';
import Footer from '../../coreui/Footer/Footer';

import Dashboard from '../../components/Dashboard/Dashboard';
import PromoSubmitter from '../PromoSubmitter/PromoSubmitter';
import SocialMediaSubmitter from '../SocialMediaSubmitter/SocialMediaSubmitter';
import PressReleaseSubmitter from '../PressReleaseSubmitter/PressReleaseSubmitter';
import AlertsSubmitter from '../AlertsSubmitter/AlertsSubmitter';
import FormTests from '../../playground/FormTests';
import FormTests2 from '../../playground/FormTests2';
import NotFoundPage from '../../components/NotFoundPage';
import QuillPlayground from '../../playground/QuillPlayground';
import HtmlGenerator from '../../components/HtmlGenerator/HtmlGenerator';

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
                <Route path="/promo-submitter" name="Promo Submitter" component={PromoSubmitter} />
                <Route path="/social-media-submitter" name="Social Media Submitter" component={SocialMediaSubmitter} />
                <Route path="/press-release-submitter" name="Press Release Submitter" component={PressReleaseSubmitter} />
                <Route path="/alerts-submitter" name="Alerts Submitter" component={AlertsSubmitter} />
                <Route path="/html-generator" name="HTML Listing Generator" component={HtmlGenerator} />
                <Route path="/playground" name="Playground" component={FormTests} />
                <Route path="/playground2" name="Playground2" component={FormTests2} />
                <Route path="/quill-playground" name="Quill Playground" component={QuillPlayground} />
                <Redirect from="/" to="/dashboard" exact={true}/>
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
