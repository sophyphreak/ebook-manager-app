import React, { Component } from 'react';
import BasicInput from './BasicInput';

const DatePicker = (props) => (
  <BasicInput
    label="Date Picker:*"
    {...props}
  />
);

export default DatePicker;