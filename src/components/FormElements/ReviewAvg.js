import React, { Component } from 'react';

const ReviewAvg = (props) => (
  <label>
    Review Avg:
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default ReviewAvg;