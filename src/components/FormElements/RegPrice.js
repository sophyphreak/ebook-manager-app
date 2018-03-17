import React, { Component } from 'react';
import BasicInput from './BasicInput';

const RegPrice = (props) => (
  <BasicInput
    label="Regular Price:*"
    {...props}
  />
);

export default RegPrice;