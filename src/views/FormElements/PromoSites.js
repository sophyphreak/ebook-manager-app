import React, { Component } from 'react';

const PromoSites = (props) => (
  <label>
    Select promo sites
    <input type="text" value={props.value} onChange={props.onChange} />
  </label>
);

export default PromoSites;