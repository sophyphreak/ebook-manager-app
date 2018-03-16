import React, { Component } from 'react';

const Email = (props) => (
  <label>
    Email:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Email;