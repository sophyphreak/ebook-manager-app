import React, { Component } from "react";
import moment from "moment";

import AlertsComponent from '../../components/AlertsComponent/AlertsComponent';
import alertToNodemailer from './alertToNodemailer/alertToNodemailer';

export default class AlertsSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'AlertsPage',
      error: {
        message: "",
        amazonUrl: "",
        alertMe: "",
        notes: "",
        email: "",
        email2: ""
      },
      amazonUrl: "",
      alertMe: {
        onTheDate: {
          text: 'On the date',
          isActive: true
        },
        oneWeekBefore: {
          text: 'One week before',
          isActive: false
        },
        twoWeeksBefore: {
          text: 'Two weeks before',
          isActive: false
        },
      },
      date: moment(),
      calendarFocused: false, 
      notes: "", 
      email: "",
      email2: ""
    };

    this.onAmazonUrlChange = this.onAmazonUrlChange.bind(this);
    this.onAlertMeChange = this.onAlertMeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onEmail2Change = this.onEmail2Change.bind(this);
    this.onSubmitAlert = this.onSubmitAlert.bind(this);
  };

  onAmazonUrlChange(e) {
    const amazonUrl = e.target.value;
    this.setState(() => ({ amazonUrl }));
  }

  onAlertMeChange(e) { 
    const option = e.target.value;
    let alertMe = this.state.alertMe;
    alertMe[option].isActive = !alertMe[option].isActive;
    this.setState(() => ({ alertMe }));
  }

  onDateChange(date) {
    if (date) {
      this.setState(() => ({ date }));
    }
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
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
      amazonUrl,
      alertMe,
      date,
      notes,
      email,
      email2
    } = this.state;
    const {
      onTheDate,
      oneWeekBefore,
      twoWeeksBefore
    } = alertMe;
    let error = {
      message: "",
      amazonUrl: "",
      alertMe: "",
      alertDate: "",
      notes: "",
      email: "",
      email2: ""
    }; 
    if (amazonUrl && !amazonUrl.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)) {
      error.amazonUrl = 'Please provide a valid Amazon.com URL.';
    };
    if (
      !onTheDate.isActive &&
      !oneWeekBefore.isActive &&
      !twoWeeksBefore.isActive
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
      error.amazonUrl ||
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

      alertToNodemailer(this.state);
    };
  };
  
  render() {
    const {
      currentPage,
      error,
      amazonUrl,
      alertMe,
      date,
      calendarFocused,
      notes,
      email,
      email2
    } = this.state;
    return (
      <AlertsComponent
        currentPage={currentPage}
        error={error}
        amazonUrl={amazonUrl}
        alertMe={alertMe}
        date={date}
        calendarFocused={calendarFocused}
        notes={notes}
        email={email}
        email2={email2}

        onAmazonUrlChange={this.onAmazonUrlChange}
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
