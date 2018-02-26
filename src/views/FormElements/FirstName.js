import React, { Component } from 'react';

const FirstName = (props) => (
  <label>
    Author First Name:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default FirstName;