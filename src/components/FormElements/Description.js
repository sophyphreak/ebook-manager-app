import React, { Component } from 'react';

const Description = (props) => (
  <label>
    Description:*
    <textarea type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Description;