import React, { Component } from 'react';

const NumReviews = (props) => (
  <label>
    # reviews: *
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default NumReviews;