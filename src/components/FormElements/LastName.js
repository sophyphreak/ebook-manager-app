import React, { Component } from 'react';
import BasicInput from './BasicInput';

const LastName = (props) => (
  <BasicInput
    label="Author Last Name:*"
    {...props}
  />
);

export default LastName;