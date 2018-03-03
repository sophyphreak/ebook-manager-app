import React, { Component } from 'react';

import PromoType from '../../FormElements/PromoType';
import PromoSites from '../../FormElements/PromoSites';

const SiteSelection = (props) => (
  <form className="form-layout animated fadeIn" onSubmit={props.onSubmit}>
    <br />
    <h5>Site Selection</h5>
    {props.error && <p>{props.error}</p>}
    <PromoType
      value={props.promoType}
      onChange={props.onPromoTypeChange}
    />
    <PromoSites
      value={props.promoSites}
      onChange={props.onPromoSitesChange}
    />
    <input type="submit" value="Submit" />
    <button onClick={props.onClickBack}>Back</button>    
  </form>
);

export default SiteSelection;