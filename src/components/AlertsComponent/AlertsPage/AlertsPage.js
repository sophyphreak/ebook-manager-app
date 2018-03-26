import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  Label
} from 'reactstrap';

import Title from '../../FormElements/Title';
import ASIN from '../../FormElements/ASIN';
import AmazonURL from '../../FormElements/AmazonURL';
import AlertMe from '../../FormElements/AlertMe';
import DatePicker from '../../FormElements/DatePicker';
import Notes from '../../FormElements/Notes';
import Email from '../../FormElements/Email';

const AlertsPage = ({
  error,

  title,
  onTitleChange,

  asin,
  onAsinChange,

  amazonURL,
  onAmazonURLChange,

  alertMe,
  onAlertMeChange,

  date,
  onDateChange,

  focusedInput,
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
        <h4><strong>Create an Alert</strong></h4>
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmitAlert}>
          <Title
            value={title}
            onChange={onTitleChange}
            hasError={!!error.message}
            errorMessage={error.title}
          />
          <ASIN
            value={asin}
            onChange={onAsinChange}
            hasError={!!error.message}
            errorMessage={error.asin}
          />
          <AmazonURL
            value={amazonURL}
            onChange={onAmazonURLChange}
            hasError={!!error.message}
            errorMessage={error.amazonURL}
          />
          <AlertMe
            value={alertMe}
            onChange={onAlertMeChange}
            hasError={!!error.message}
            errorMessage={error.alertMe}
          />
          <DatePicker 
            value={date}
            onChange={onDateChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
          />
          <Notes 
            value={notes}
            onChange={onNotesChange}
            hasError={!!error.message}
            errorMessage={error.Notes}
          />
          <Email
            label="Email to notify*"          
            value={email}
            onChange={onEmailChange}
            hasError={!!error.message}
            errorMessage={error.email}
          />
          <Email
            label="Secondary email to notify:"
            value={email2}
            onChange={onEmail2Change}
            hasError={!!error.message}
            errorMessage={error.email2}
          />
          {error.message && <p>{error.message}</p>}
          <Button
            type="submit"
            size="sm"
            color="primary"
            value="Submit"
          >
            Submit
        </Button>
        </Form>
      </CardBody>
    </Card>
  );

export default AlertsPage;