import React, { Component } from 'react';
import BasicInput from './BasicInput';

const Genre = (props) => (
  <BasicInput
    label="Genre:*"
    {...props}
  />
);

export default Genre; 