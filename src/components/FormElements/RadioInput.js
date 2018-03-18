import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const RadioInput = ({ label, options, value, onChange }) => (
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
          />
          <Label check>
            {option}
          </Label>
        </FormGroup>
      ))
    }
  </FormGroup>
); 

export default RadioInput;  