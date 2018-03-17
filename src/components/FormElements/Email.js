import React, { Component } from 'react';
import BasicInput from './BasicInput';

const Email = (props) => (
  <BasicInput
    label="Email:*"
    {...props}
  />
);

export default Email;