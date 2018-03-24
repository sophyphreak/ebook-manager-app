import React, { Component } from 'react';
import {
  FormFeedback,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import isValid from './isValid/isValid';

const TextAreaInput = ({ 
  hasError,
  errorMessage,
  label, 
  value, 
  onChange 
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      type="textarea"
      value={value}
      onChange={onChange}
      valid={isValid(hasError, errorMessage)}
    />
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
);

export default TextAreaInput;