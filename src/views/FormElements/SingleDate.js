import React from 'react';
import { SingleDatePicker } from 'react-dates';
import { FormGroup, Label } from 'reactstrap';

const SingleDate = ({
  label,
  date,
  onDateChange,
  calendarFocused,
  onFocusChange
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <br />
    <SingleDatePicker
      date={date}
      onDateChange={onDateChange}
      focused={calendarFocused}
      onFocusChange={onFocusChange}
    />
  </FormGroup>
);

export default SingleDate;
