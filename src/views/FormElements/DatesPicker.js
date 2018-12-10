import React from 'react';
import { DateRangePicker } from 'react-dates';
import { Label } from 'reactstrap';

const DatesPicker = ({
  label,
  startDate,
  endDate,
  onDatesChange,
  calendarFocus,
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
      focusedInput={calendarFocus}
      onFocusChange={onFocusChange}
    />
  </div>
);

export default DatesPicker;
