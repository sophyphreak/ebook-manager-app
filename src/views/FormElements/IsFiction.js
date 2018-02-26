import React, { Component } from 'react';

const IsFiction = (props) => (
  <label>
    Fiction or Non-fiction?*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default IsFiction;