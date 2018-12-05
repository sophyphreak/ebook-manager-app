import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const Website = ({ label, website, onWebsiteChange, ...props }) => (
  <BasicInput
    label={label}
    value={website}
    onChange={onWebsiteChange}
    {...props}
  />
);

export default Website;
