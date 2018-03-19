import React, { Component } from 'react';
import BasicInput from './BasicInput';

const Price = (props) => (
  <BasicInput
    label="Price:*"
    {...props}
  />
);

export default Price;