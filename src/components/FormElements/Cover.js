import React, { Component } from 'react';

const Cover = (props) => (
  <label>
    Cover: <em>*Can't do this yet*</em>
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default Cover;