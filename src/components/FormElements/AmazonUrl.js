import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const AmazonUrl = ({
  label,
  amazonUrl,
  onAmazonUrlChange,
  ...props
}) => (
  <BasicInput
    label={label}
    value={amazonUrl}
    onChange={onAmazonUrlChange}
    {...props}
  />
);

export default AmazonUrl;