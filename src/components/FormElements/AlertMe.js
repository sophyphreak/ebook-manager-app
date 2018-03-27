import React, { Component } from 'react';
import BasicInput from './BasicInput';

const AlertMe = (props) => (
  <BasicInput
    label="Alert Me:*"
    {...props}
  />
);

export default AlertMe;