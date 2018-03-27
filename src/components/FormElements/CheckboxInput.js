import React from 'react';
import { 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';
import isValid from './isValid/isValid';

const CheckboxInput = ({
  hasError,
  errorMessage,
  label,
  options,
  onChange
}) => (
  <FormGroup>
    {label && <Label>{label}</Label>}
    {
      Object.keys(options).map((option, i ) => (
        <FormGroup className="checkbox-input__indent" key={i}>
          <Input
            type="checkbox"
            value={option}
            onChange={onChange}
            checked={options[option]}
            valid={isValid(hasError, errorMessage)}
          />
          <Label check>
            {option}
          </Label>
        </FormGroup>
      ))
    }
  </FormGroup>
);

export default CheckboxInput;