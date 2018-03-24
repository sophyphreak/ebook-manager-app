import React, { Component } from 'react';
import {
  FormGroup,
  FormFeedback,
  Label,
  Input
} from 'reactstrap';

const BasicInput = ({ 
  isError, 
  errorMessage,
  label, 
  value, 
  onChange
 }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input 
      type="text" 
      value={value} 
      onChange={onChange} 
      valid={isError && !errorMessage}
      invalid={isError && !!errorMessage}      
    />
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
);

export default BasicInput;