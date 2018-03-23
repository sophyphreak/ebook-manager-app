import React, { Component } from 'react';
import BasicInput from './BasicInput';

const Price = (props) => (
  <BasicInput
    label="Regular Price:*"
    {...props}
  />
);

export default Price;