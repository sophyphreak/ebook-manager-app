import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';

import AlertsPage from "./AlertsPage/AlertsPage";

const AlertsComponent = ({
  currentPage,
  ...props
}) => (
  <Row>
    <Col xs="12" sm={{ size: 8, offset: 2 }}>
      {
        currentPage === "AlertsPage" && (
          <AlertsPage {...props} />
        )
      }
      {
        currentPage === "SubmissionSuccess" && (
          <p className="animated fadeIn">
            Your Alert Submission has been submitted. Please wait for a
            confirmation email.
          </p>
        )
      }
    </Col>
  </Row>
);

export default AlertsComponent;