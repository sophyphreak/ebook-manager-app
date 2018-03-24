import React, { Component } from 'react';
import {
  FormGroup,
  FormFeedback,
  Label,
  Input
} from 'reactstrap';

const BasicInput = ({ 
  error, 
  valid, 
  invalid, 
  label, 
  value, 
  onChange
 }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input 
      valid={valid}
      invalid={invalid}
      type="text" 
      value={value} 
      onChange={onChange} 
    />
    {error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

export default BasicInput;