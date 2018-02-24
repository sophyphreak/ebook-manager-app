import React, { Component } from 'react';

const PressRelease = (props) => (
  <label>
    Press Release:*
    <textarea type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default PressRelease;