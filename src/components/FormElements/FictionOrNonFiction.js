import React, { Component } from 'react';
import RadioHorizontal from './MainElements/RadioHorizontal';

const FictionOrNonFiction = (props) => (
  <RadioHorizontal
    label=""
    options={['Non-fiction', 'Fiction']}
    {...props}
  />
);

export default FictionOrNonFiction;