import React, { Component } from 'react';
import RadioInput from './MainElements/RadioInput';

const PromoTypes = (props) => (
  <RadioInput
    options={['Free (Limited Time)', '99 cents', 'Perma Free']}
    {...props}
  />
);

export default PromoTypes;