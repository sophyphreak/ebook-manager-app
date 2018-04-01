import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import { Col, Label } from 'reactstrap';

const DatesPicker = ({
  label,
  startDate,
  endDate,
  onDatesChange,
  focusedInput,
  onFocusChange
}) => (
  <div className="dates-picker__vertical">
    <Label>{label}</Label>
    <DateRangePicker
      startDate={startDate}
      startDateId="startDate"
      endDate={endDate}
      endDateId="endDate"
      onDatesChange={onDatesChange}
      focusedInput={focusedInput}
      onFocusChange={onFocusChange}
    />
  </div>
);

export default DatesPicker;