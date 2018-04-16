import React, { Component } from 'react';
import CheckboxInput from './MainElements/CheckboxInput';

const AlertMe = ({ label, alertMe, onAlertMeChange, ...props }) => (
  <CheckboxInput
    label={label}
    options={alertMe}
    onChange={onAlertMeChange}
    {...props}
  />
);

export default AlertMe;
