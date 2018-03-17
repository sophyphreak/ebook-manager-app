import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const BasicInput = ({ label, value, onChange }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input 
      type="text" 
      value={value} 
      onChange={onChange} 
    />
  </FormGroup>
);

export default BasicInput;