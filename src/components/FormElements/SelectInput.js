import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const SelectInput = ({ 
  error, 
  valid, 
  invalid, 
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
      valid={valid}
      invalid={invalid}
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
    {error && <FormFeedback>{error}</FormFeedback>}    
  </FormGroup>
);

export default SelectInput;  