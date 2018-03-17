import React, { Component } from 'react';
import BasicInput from './BasicInput';

const FirstName = (props) => (
  <BasicInput
    label="Author First Name:*"
    {...props}
  />
);

export default FirstName;