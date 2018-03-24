import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const SelectInput = ({ label, options, value, onChange }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    <Input
      type="select"
      onChange={onChange}
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
  </FormGroup>
);

export default SelectInput;  