import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const RadioInput = ({ 
  error, 
  valid, 
  invalid, 
  label, 
  options, 
  alue, 
  onChange 
}) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {
      options.map((option, i) => (
        <FormGroup className="radio-input__indent" check key={i}>
          <Input
            type="radio"
            value={option}
            onChange={onChange}
            checked={value === option}
            valid={valid}
            invalid={invalid}
          />
          <Label check>
            {option}
          </Label>
          {error && <FormFeedback>{error}</FormFeedback>}              
        </FormGroup>
      ))
    }
  </FormGroup>
); 

export default RadioInput;  