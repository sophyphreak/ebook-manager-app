import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form
} from 'reactstrap';

import Price from '../../FormElements/Price';
import PromoType from '../../FormElements/PromoType';
import DatesPicker from '../../FormElements/DatesPicker';

const PressReleasePage2 = ({
  error,
  onBack,
  onSubmit,

  price,
  onPriceChange,

  promoType,
  onPromoTypeChange,

  startDate,
  endDate,
  focusedInput,
  onDatesChange,
  onFocusChange
}) => (
    <Card className="animated fadeIn">
      <CardHeader>
        <h4><strong>Press Release - 2 of 3</strong></h4>
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <Price
            label="Regular Price*"
            price={price}
            onPriceChange={onPriceChange}
            hasError={!!error.message}
            errorMessage={error.price}
          />
          <PromoType
            label="Select Promotion Type*"
            value={promoType}
            onChange={onPromoTypeChange}
            hasError={!!error.message}
            errorMessage={error.promoType}
          />
          <DatesPicker
            label="Dates for promotion"
            startDate={startDate}
            endDate={endDate}
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
          />
          {error.message && <p>{error.message}</p>}
          <Button
            onClick={onBack}
            size="sm"
            color="basic"
          >
            Go Back
          </Button>
          <Button
            type="submit"
            size="sm"
            color="primary"
            value="Submit"
          >
            Next Section
          </Button>
        </Form>
      </CardBody>
    </Card>
  );

export default PressReleasePage2;