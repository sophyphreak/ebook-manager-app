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
 }) => {
  const isValid = (isError, errorMessage) => {
    if (isError && !errorMessage) {
      return true;
    }
    if (isError && !!errorMessage) {
      return false;
    }
    return null;
  };

  return (
  <FormGroup>
    <Label>{label}</Label>
    <Input 
      type="text" 
      value={value} 
      onChange={onChange} 
      valid={isValid(isError, errorMessage)}
    />
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
)};

export default BasicInput;