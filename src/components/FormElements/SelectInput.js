import React, { Component } from 'react';
import {
  FormFeedback,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import isValid from './isValid/isValid';

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
    >
      {
        options.map((option, i) => (
          <option
            value={option}
            key={i}
          >
            {option}
          </option>
        ))
      }
    </Input>
    {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}    
  </FormGroup>
);

export default SelectInput;  