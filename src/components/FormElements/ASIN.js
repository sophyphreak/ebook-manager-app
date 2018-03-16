import React, { Component } from 'react';

const ASIN = (props) => (
  <label>
    ASIN:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default ASIN;