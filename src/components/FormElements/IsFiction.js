import React, { Component } from 'react';
import BasicInput from './BasicInput';

const IsFiction = (props) => (
  <BasicInput
    label="Fiction or Non-fiction?*"
    {...props}
  />
);

export default IsFiction;