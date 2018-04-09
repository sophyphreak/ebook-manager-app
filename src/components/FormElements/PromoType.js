import React, { Component } from 'react';
import RadioInput from './MainElements/RadioInput';

const PromoTypes = ({
  promoType,
  onPromoTypeChange,
  ...props
}) => (
  <RadioInput
    options={['Free (Limited Time)', '99 cents', 'Perma Free']}
    value={promoType}
    onChange={onPromoTypeChange}
    {...props}
  />
);

export default PromoTypes;