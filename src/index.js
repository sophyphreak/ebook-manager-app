import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'react-dates/initialize';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';
// Import ReactDates styles
import 'react-dates/lib/css/_datepicker.css';
// import ReactQuill styles
import 'react-quill/dist/quill.snow.css';

// Containers
import Full from './containers/Full/Full';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
