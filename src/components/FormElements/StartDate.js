import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

const StartDate = (props) => (
  <label>
    Start Date:*
    <SingleDatePicker
      date={props.date}
      onDateChange={props.onDateChange}
      focused={props.focused}
      onFocusChange={props.onFocusChange}
      numberOfMonths={1}
      isOutsideRange={() => false}
    />
  </label>
);

export default StartDate;