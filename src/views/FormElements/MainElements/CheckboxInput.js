import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import isValid from '../getValidity/isValid';
import isInvalid from '../getValidity/isInvalid';

const CheckboxInput = ({
  hasError,
  errorMessage,
  label,
  options,
  onChange
}) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {Object.keys(options).map((option, i) => (
      <FormGroup className="checkbox-input__indent" key={i}>
        <Input
          type="checkbox"
          value={option}
          onChange={onChange}
          checked={options[option].isActive}
          valid={isValid(hasError, errorMessage)}
          invalid={isInvalid(hasError, errorMessage)}
        />
        <Label check>{options[option].text}</Label>
      </FormGroup>
    ))}
  </FormGroup>
);

export default CheckboxInput;
