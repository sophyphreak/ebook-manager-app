import React, { Component } from 'react';
import BasicInput from './BasicInput';

const AmazonURL = (props) => (
  <BasicInput
    label="Amazon URL:*"
    {...props}
  />
);

export default AmazonURL;