import React from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import isValid from '../getValidity/isValid'
import isInvalid from '../getValidity/isInvalid';

const TextAreaInput = ({ hasError, errorMessage, label, value, onChange }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      className="textarea"
      type="textarea"
      value={value}
      onChange={onChange}
      valid={isValid(hasError, errorMessage)}
      invalid={isInvalid(hasError, errorMessage)}
    />
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
);

export default TextAreaInput;
