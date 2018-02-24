import React, { Component } from 'react';

const EndDate = (props) => (
  <label>
    End Date:*
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default EndDate;