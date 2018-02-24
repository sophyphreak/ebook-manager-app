import React, { Component } from 'react';

const CurrentPrice = (props) => (
  <label>
    Current Price ($):*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default CurrentPrice;