import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import getValidity from '../getValidity/getValidity';

const RadioInput = ({
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
      <FormGroup className="radio-input__indent" check key={i}>
        <Input
          type="radio"
          value={option}
          onChange={onChange}
          checked={value === option}
          valid={getValidity(hasError, errorMessage)}
        />
        <Label check>{option}</Label>
      </FormGroup>
    ))}
  </FormGroup>
);

export default RadioInput;
