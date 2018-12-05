import React, { Component } from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import getValidity from '../getValidity/getValidity';

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
      valid={getValidity(hasError, errorMessage)}
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
