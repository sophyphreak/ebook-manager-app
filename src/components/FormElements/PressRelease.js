import React, { Component } from 'react';

const PressRelease = (props) => (
  <label>
    Press Release:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default PressRelease;