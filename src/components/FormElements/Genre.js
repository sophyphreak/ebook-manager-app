import React, { Component } from 'react';

const Genre = (props) => (
  <label>
    Genre:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Genre;