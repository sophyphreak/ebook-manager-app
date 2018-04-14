import React, { Component } from "react";
import moment from "moment";

import AlertsComponent from '../../components/AlertsComponent/AlertsComponent';
import flipClickedAlertMeOption from './onChangeHelpers/flipClickedAlertMeOption';
import alertsPageValidation from './alertValidation/alertsPageValidation';
import sendAlertToNodemailer from "./sendAlertToNodemailer/sendAlertToNodemailer";

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
    const alertMeAndOption = {
      alertMe,
      option
    };
    alertMe = flipClickedAlertMeOption(alertMeAndOption);
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
      error,
      errorsExist
    } = alertsPageValidation(this.state);
    this.setState(() => ({ error }));    
    if (errorsExist) {
      return;
    };
    console.log(this.state);
    const currentPage = "SubmissionSuccess";
    this.setState(() => ({ currentPage }));
    sendAlertToNodemailer(this.state);
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
