import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const Email = ({
  label,
  email,
  onEmailChange,
  ...props
}) => (
  <BasicInput
    label={label}
    value={email}
    onChange={onEmailChange}
    {...props}
  />
);

export default Email;