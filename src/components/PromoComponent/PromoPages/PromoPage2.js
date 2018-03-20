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

const PromoPage2 = ({
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
        <h4><strong>Book Promo - 2 of 3</strong></h4>
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <Price
            value={price}
            onChange={onPriceChange}
          />
          <PromoType
            value={promoType}
            onChange={onPromoTypeChange}
          />
          <DatesPicker
            startDate={startDate}
            endDate={endDate}
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
          />
          {error && <p>{error}</p>}
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

export default PromoPage2;