import React from 'react';
import RadioInput from './MainElements/RadioInput';
import promoTypeOptions from './options/promoTypeOptions';

const PromoTypes = ({ promoType, onPromoTypeChange, ...props }) => (
  <RadioInput
    options={promoTypeOptions}
    value={promoType}
    onChange={onPromoTypeChange}
    {...props}
  />
);

export default PromoTypes;
