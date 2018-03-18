import React, { Component } from 'react';
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const TextAreaInput = ({ label, value, onChange }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      type="textarea"
      value={value}
      onChange={onChange}
    />
  </FormGroup>
);

export default TextAreaInput;