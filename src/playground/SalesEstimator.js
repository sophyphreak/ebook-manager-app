import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import BasicInput from '../components/FormElements/MainElements/BasicInput';

export default class SalesEstimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bsr: '',
      sales: ''
    };
    this.onBsrChange = this.onBsrChange.bind(this);
  }

  onBsrChange(e) {
    const bsr = e.target.value;
    const sales = bsr && Math.round(10023 / bsr);
    if (!bsr || bsr.match(/^[1-9][0-9]*$/)) {
      this.setState(() => ({ bsr, sales }));
    }
  };

  render() {
    return (
      <Row>
        <Col xs="12" sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h4><strong>Sales Estimator</strong></h4>
            </CardHeader>
            <CardBody>
              <BasicInput 
                label="Please enter the BSR"
                onChange={this.onBsrChange} 
                value={this.state.bsr} 
              />
              <br />
              {
                this.state.bsr && 
                <FormGroup className="animated fadeIn">
                  <Label>Estimated sales</Label>
                  <br />
                  <Label><b>{this.state.sales} units per month</b></Label>
                </FormGroup>
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
};