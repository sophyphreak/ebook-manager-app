import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const RadioHorizontal = ({ 
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
    {
      options.map((option, i) => (
        <FormGroup check inline key={i}>
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
        </FormGroup>
      ))
    }
    {error && <FormFeedback>{error}</FormFeedback>}    
  </FormGroup>
);

export default RadioHorizontal;