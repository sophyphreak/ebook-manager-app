import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Dashboard extends Component {
  render() {
    return (
      <Row className="animated fadeIn">
        <Col xs="12" sm={{ size: 6, offset: 3 }}>
          <h4>Your Dashboard</h4>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
