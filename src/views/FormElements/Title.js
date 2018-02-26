import React, { Component } from 'react';

const Title = (props) => (
  <label>
    Title:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Title;