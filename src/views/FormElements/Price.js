import React from 'react';
import BasicInput from './MainElements/BasicInput';

const Price = ({ label, price, onPriceChange, ...props }) => (
  <BasicInput label={label} value={price} onChange={onPriceChange} {...props} />
);

export default Price;
