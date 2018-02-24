import React, { Component } from 'react';

const AuthorBio = (props) => (
  <label>
    Author Biography:
    <textarea type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default AuthorBio;