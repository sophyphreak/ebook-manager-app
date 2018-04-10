import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const Keywords = ({
  label,
  keywords,
  onKeywordsChange,
  ...props
}) => (
  <BasicInput
    label={label}
    value={keywords}
    onChange={onKeywordsChange}
    {...props}
  />
);

export default Keywords;