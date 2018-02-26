import React, { Component } from 'react';

const SubGenre = (props) => (
  <label>
    Sub Genre:
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default SubGenre;