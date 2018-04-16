import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import nothingToSeeGif from '../../../public/img/nothing-to-see-here.gif';

class Dashboard extends Component {
  render() {
    return (
      <Row className="animated fadeIn">
        <Col xs="12" sm={{ size: 6, offset: 3 }}>
          <h4>Your Dashboard</h4>
          <img src={nothingToSeeGif} />
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
