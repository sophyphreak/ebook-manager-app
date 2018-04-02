import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';

import AlertsPage from "./AlertsPage/AlertsPage";
import AlertsSuccess from './AlertsPage/AlertsSuccess';

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
          <AlertsSuccess feature="alert" />
        )
      }
    </Col>
  </Row>
);

export default AlertsComponent;