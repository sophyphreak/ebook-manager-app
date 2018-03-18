import React, { Component } from 'react';
import TextAreaInput from './TextAreaInput';

const Description = (props) => (
  <TextAreaInput
    label="Book description:*"
    {...props}
  />
);

export default Description;