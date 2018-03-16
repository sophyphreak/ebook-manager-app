import React, { Component } from 'react';

const PromoTypes = (props) => (
  <label>
    Select Promotion Type:
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default PromoTypes;