import React, { Component } from 'react';
import BasicInput from './BasicInput';

const Email = ({ label, ...props }) => (
  <BasicInput
    label={label}
    {...props}
  />
);

export default Email;