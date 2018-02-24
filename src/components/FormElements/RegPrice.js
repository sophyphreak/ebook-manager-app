import React, { Component } from 'react';

const RegPrice = (props) => (
  <label>
    Regular Price ($):*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default RegPrice;