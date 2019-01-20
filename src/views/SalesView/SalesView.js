import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Row
} from 'reactstrap';

import BasicInput from '../FormElements/MainElements/BasicInput';
import KindleOrPrint from '../FormElements/KindleOrPrint';

const SalesView = ({
  bsr,
  kindleOrPrint,
  sales,
  onBsrChange,
  onKindleOrPrintChange
}) => (
  <Row className="animated fadeIn">
    <Col xs="12" sm={{ size: 6, offset: 3 }}>
      <Card>
        <CardHeader>
          <h4>
            <strong>Sales Estimator</strong>
          </h4>
        </CardHeader>
        <CardBody>
          <KindleOrPrint
            kindleOrPrint={kindleOrPrint}
            onKindleOrPrintChange={onKindleOrPrintChange}
          />
          <BasicInput label="Enter BSR" onChange={onBsrChange} value={bsr} />
          <br />
          {bsr && (
            <FormGroup className="animated fadeIn">
              <Label>Estimated sales</Label>
              <br />
              <Label>
                <b>{sales} units per month</b>
              </Label>
            </FormGroup>
          )}
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default SalesView;
