import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import "react-dates/initialize";

// Styles
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";
// // Import ReactQuill styles
// import 'react-quill/dist/quill.snow.css';
// Import ReactDates styles
import "react-dates/lib/css/_datepicker.css";

// Containers
import Full from "./containers/Full/Full";

export const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" name="Home" component={Full} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
