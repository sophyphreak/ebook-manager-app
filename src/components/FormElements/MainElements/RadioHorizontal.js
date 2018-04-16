import React, { Component } from 'react';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import getValidity from '../getValidity/getValidity';

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
          valid={getValidity(hasError, errorMessage)}
        />
        <Label check>{option}</Label>
      </FormGroup>
    ))}
  </FormGroup>
);

export default RadioHorizontal;
