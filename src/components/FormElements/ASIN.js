import React, { Component } from 'react';
import BasicInput from './BasicInput';

const ASIN = (props) => (
  <BasicInput
    label="ASIN:*"
    {...props}
  />
);

export default ASIN;