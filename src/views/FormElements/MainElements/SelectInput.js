import React from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import isValid from '../getValidity/isInvalid';
import isInvalid from '../getValidity/isInvalid';

const SelectInput = ({
  hasError,
  errorMessage,
  label,
  options,
  value,
  onChange
}) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    <Input
      type="select"
      onChange={onChange}
      valid={isValid(hasError, errorMessage)}
      invalid={isInvalid(hasError, errorMessage)}
    >
      {options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </Input>
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
  </FormGroup>
);

export default SelectInput;
