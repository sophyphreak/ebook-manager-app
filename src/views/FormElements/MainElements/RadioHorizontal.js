import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import isValid from '../getValidity/isValid';
import isInvalid from '../getValidity/isInvalid';

const RadioHorizontal = ({
  hasError,
  errorMessage,
  label,
  options,
  value,
  onChange
}) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {options.map((option, i) => (
      <FormGroup check inline key={i}>
        <Input
          type="radio"
          value={option}
          onChange={onChange}
          checked={value === option}
          valid={isValid(hasError, errorMessage)}
          invalid={isInvalid(hasError, errorMessage)}
        />
        <Label check>{option}</Label>
      </FormGroup>
    ))}
  </FormGroup>
);

export default RadioHorizontal;
