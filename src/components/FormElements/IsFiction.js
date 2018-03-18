import React, { Component } from 'react';
import RadioHorizontal from './RadioHorizontal';

const IsFiction = (props) => (
  <RadioHorizontal
    label=""
    options={['Fiction', 'Non-fiction']}
    {...props}
  />
);

export default IsFiction;