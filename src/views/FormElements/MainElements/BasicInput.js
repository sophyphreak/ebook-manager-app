import React from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import isValid from '../getValidity/isValid';
import isInvalid from '../getValidity/isInvalid';

const BasicInput = ({ hasError, errorMessage, label, value, onChange }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      valid={isValid(hasError, errorMessage)}
      invalid={isInvalid(hasError, errorMessage)}
    />
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
);

export default BasicInput;
