import React, { Component } from 'react';

const StartDate = (props) => (
  <label>
    Start Date:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default StartDate;