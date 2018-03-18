import React, { Component } from 'react';
import RadioInput from './RadioInput';

const IsFiction = (props) => (
  <RadioInput
    label=""
    options={['Fiction', 'Non-fiction']}
    {...props}
  />
);

export default IsFiction;