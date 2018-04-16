import React, { Component } from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import getValidity from '../getValidity/getValidity';

const TextAreaInput = ({ hasError, errorMessage, label, value, onChange }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      className="textarea"
      type="textarea"
      value={value}
      onChange={onChange}
      valid={getValidity(hasError, errorMessage)}
    />
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
);

export default TextAreaInput;
