import React, { Component } from 'react';
import RadioHorizontal from './RadioHorizontal';

const FictionOrNonFiction = (props) => (
  <RadioHorizontal
    label=""
    options={['Fiction', 'Non-fiction *']}
    {...props}
  />
);

export default FictionOrNonFiction;