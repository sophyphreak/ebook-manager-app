import React, { Component } from 'react';
import TextAreaInput from './MainElements/TextAreaInput';

const Facebook = ({
  label,
  facebook,
  onFacebookChange,
  ...props
}) => (
  <TextAreaInput  
    label={label}
    value={facebook}
    onChange={onFacebookChange}
    {...props}
  />
);

export default Facebook;