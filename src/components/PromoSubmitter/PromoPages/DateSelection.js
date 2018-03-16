import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';

const DateSelection = (props) => (
  <form className="form-layout animated fadeIn" onSubmit={props.onSubmit}>
    <br />
    <h5>Select dates for your promotion</h5>
    {props.error && <p>{props.error}</p>}
    <DateRangePicker
      startDate={props.startDate}
      startDateId="startDate"
      endDate={props.endDate}
      endDateId="endDate"
      onDatesChange={props.onDatesChange}
      focusedInput={props.focusedInput}
      onFocusChange={props.onFocusChange}
    />
    <input type="submit" value="Submit" />
    <button onClick={props.onClickBack}>Back</button>    
  </form>
);

export default DateSelection;