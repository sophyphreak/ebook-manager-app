import React, { Component } from 'react';

const AmazonURL = (props) => (
  <label>
    Amazon URL:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default AmazonURL;