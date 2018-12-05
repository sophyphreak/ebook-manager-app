import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Form } from 'reactstrap';

import AmazonUrl from '../../FormElements/AmazonUrl';
import AlertMe from '../../FormElements/AlertMe';
import SingleDate from '../../FormElements/SingleDate';
import Notes from '../../FormElements/Notes';
import Email from '../../FormElements/Email';

const AlertsPage = ({
  error,

  amazonUrl,
  onAmazonUrlChange,

  alertMe,
  onAlertMeChange,

  date,
  onDateChange,

  calendarFocused,
  onFocusChange,

  notes,
  onNotesChange,

  email,
  onEmailChange,

  email2,
  onEmail2Change,

  onSubmitAlert
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4>
        <strong>Create an Alert</strong>
      </h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmitAlert}>
        <AmazonUrl
          label="Amazon URL"
          amazonUrl={amazonUrl}
          onAmazonUrlChange={onAmazonUrlChange}
          hasError={!!error.message}
          errorMessage={error.amazonUrl}
        />
        <AlertMe
          label="Alert Me*"
          alertMe={alertMe}
          onAlertMeChange={onAlertMeChange}
          hasError={!!error.message}
          errorMessage={error.alertMe}
        />
        <SingleDate
          label="Alert Date*"
          date={date}
          onDateChange={onDateChange}
          calendarFocused={calendarFocused}
          onFocusChange={onFocusChange}
        />
        <Notes
          label="Notes/Other Info*"
          notes={notes}
          onNotesChange={onNotesChange}
          hasError={!!error.message}
          errorMessage={error.notes}
        />
        <Email
          label="Email to notify*"
          email={email}
          onEmailChange={onEmailChange}
          hasError={!!error.message}
          errorMessage={error.email}
        />
        <Email
          label="Secondary email to notify"
          email={email2}
          onEmailChange={onEmail2Change}
          hasError={!!error.message}
          errorMessage={error.email2}
        />
        {error.message && <p>{error.message}</p>}
        <Button type="submit" size="sm" color="primary" value="Submit">
          Submit
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default AlertsPage;
