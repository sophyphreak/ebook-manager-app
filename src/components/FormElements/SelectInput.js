import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const SelectInput = ({ label, isDisabled, options, value, onChange }) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    <Input
      type="select"
      disabled={isDisabled}
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