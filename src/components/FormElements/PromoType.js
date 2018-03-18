import React, { Component } from 'react';
import RadioInput from './RadioInput';

const PromoTypes = (props) => (
  <RadioInput
    label="Select Promotion Type:*"
    options={['Free (Limited Time)', '99 cents', 'Perma Free']}
    {...props}
  />
);

export default PromoTypes;