import React, { Component } from 'react';
import BasicInput from './BasicInput';

const Title = (props) => (
  <BasicInput 
    label="Title:*" 
    {...props}
  />
);

export default Title;