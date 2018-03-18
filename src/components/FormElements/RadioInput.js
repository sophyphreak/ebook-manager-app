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
        <FormGroup check inline key={i}>
          <Input
            type="radio"
            value={option}
            onChange={onChange}
            checked={value === option}
          />
          <Label>
            {option}
          </Label>
        </FormGroup>
      ))
    }
  </FormGroup>
);

export default RadioInput;