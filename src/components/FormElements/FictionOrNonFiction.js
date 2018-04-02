import React, { Component } from 'react';
import RadioHorizontal from './MainElements/RadioHorizontal';

const FictionOrNonFiction = (props) => (
  <RadioHorizontal
    label=""
    options={['Fiction', 'Non-fiction *']}
    {...props}
  />
);

export default FictionOrNonFiction;