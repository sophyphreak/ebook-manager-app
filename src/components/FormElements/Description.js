import React, { Component } from 'react';

const Description = (props) => (
  <label>
    Description:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Description;