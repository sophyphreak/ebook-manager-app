import React, { Component } from 'react';

const LastName = (props) => (
  <label>
    Author Last Name:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default LastName;