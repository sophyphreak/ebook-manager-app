import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

const EndDate = (props) => (
  <label>
    End Date:*
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

export default EndDate;