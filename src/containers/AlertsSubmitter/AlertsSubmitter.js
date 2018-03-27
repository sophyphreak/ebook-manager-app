import React, { Component } from "react";
import moment from "moment";

import AlertsComponent from '../../components/AlertsComponent/AlertsComponent';
import alertsPostToServer from './alertsPostToServer/alertsPostToServer';

export default class AlertsSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'AlertsPage',
      error: {
        message: "",
        amazonURL: "",
        alertMe: "",
        notes: "",
        email: "",
        email2: ""
      },
      amazonURL: "",
      alertMe: {
        onDate: false,
        weekBefore: false,
        twoWeeksBefore: false
      },
      date: moment(),
      calendarFocus: null, 
      notes: "",
      email: "",
      email2: ""
    };

    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onAlertMeChange = this.onAlertMeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onEmail2Change = this.onEmail2Change.bind(this);
    this.onSubmitAlert = this.onSubmitAlert.bind(this);
  };

  onAmazonURLChange(e) {
    const amazonURL = e.target.value;
    this.setState(() => ({ amazonURL }));
  }

  onAlertMeChange(e) { // This probably won't work as is
    const alertMe = e.target.value;
    this.setState(() => ({ alertMe }));
  }

  onDateChange({ date }) {
    this.setState(() => ({ date }));
  }

  onFocusChange(calendarFocus) {
    this.setState(() => ({ calendarFocus }));
  }

  onNotesChange(e) {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onEmail2Change(e) {
    const email2 = e.target.value;
    this.setState(() => ({ email2 }));
  }

  onSubmitAlert(e) {
    e.preventDefault();
    const {
      amazonURL,
      alertMe,
      date,
      notes,
      email,
      email2
    } = this.state;
    let error = {
      message: "",
      amazonURL: "",
      alertMe: "",
      alertDate: "",
      notes: "",
      email: "",
      email2: ""
    };
    if (!amazonURL) {
      error.amazonURL = 'Please fill in an Amazon URL.';
    } else if (!amazonURL.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)) {
      error.amazonURL = 'Please provide a valid Amazon.com URL.';
    };
    if (
      alertMe.onDate === false &&
      alertMe.weekBefore === false &&
      alertMe.twoWeeksBefore === false
    ) {
      error.alertMe = 'This will not render.';
    }
    if (!notes) {
      error.notes = 'Please enter notes.';
    }
    if (!email) {
      error.email = 'Please enter an email.';
    } else if (!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      error.email = 'Please provide a valid email address.';
    };
    if (email2 && !email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      error.email2 = 'Please provide a valid email adddress.';
    }
    if (
      error.amazonURL ||
      error.alertMe ||
      error.email ||
      error.email2
    ) {
      error.message = 'Please fix errors.'
      this.setState(() => ({ error }));
    };
    if (!error.message) {
      console.log(this.state);
      const currentPage = "SubmissionSuccess";
      this.setState(() => ({
        error,
        currentPage
      }));
      alertsPostToServer(this.state);
    };
  };
  
  render() {
    const {
      currentPage,
      error,
      amazonURL,
      alertMe,
      date,
      calendarFocus,
      notes,
      email,
      email2
    } = this.state;
    return (
      <AlertsComponent
        currentPage={currentPage}
        error={error}
        amazonURL={amazonURL}
        alertMe={alertMe}
        date={date}
        focusedInput={calendarFocus}
        notes={notes}
        email={email}
        email2={email2}

        onAmazonURLChange={this.onAmazonURLChange}
        onAlertMeChange={this.onAlertMeChange}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        onNotesChange={this.onNotesChange}
        onEmailChange={this.onEmailChange}
        onEmail2Change={this.onEmail2Change}
        onSubmitAlert={this.onSubmitAlert}
      />
    );
  }
}
