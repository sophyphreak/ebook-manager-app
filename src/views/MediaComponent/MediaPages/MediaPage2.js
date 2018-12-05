import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Form } from 'reactstrap';

import Price from '../../FormElements/Price';
import DatesPicker from '../../FormElements/DatesPicker';

const MediaPage2 = ({
  error,
  onBack,
  onSubmit,

  regPrice,
  onRegPriceChange,

  salePrice,
  onSalePriceChange,

  startDate,
  endDate,
  focusedInput,
  onDatesChange,
  onFocusChange
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4>
        <strong>Social Media Submission - 2 of 3</strong>
      </h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmit}>
        <Price
          label="Regular Price*"
          price={regPrice}
          onPriceChange={onRegPriceChange}
          hasError={!!error.message}
          errorMessage={error.regPrice}
        />
        <Price
          label="Sale Price (if applicable)"
          price={salePrice}
          onPriceChange={onSalePriceChange}
          hasError={!!error.message}
          errorMessage={error.salePrice}
        />
        <DatesPicker
          label="Dates for promotion (if applicable)"
          startDate={startDate}
          endDate={endDate}
          onDatesChange={onDatesChange}
          focusedInput={focusedInput}
          onFocusChange={onFocusChange}
        />
        {error.message && <p>{error.message}</p>}
        <Button
          className="back-button"
          onClick={onBack}
          size="sm"
          color="basic"
        >
          Go Back
        </Button>
        <Button type="submit" size="sm" color="primary" value="Submit">
          Next Section
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default MediaPage2;
