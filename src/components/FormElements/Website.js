import React, { Component } from 'react';

const Website = (props) => (
  <label>
    Website:
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Website;