import React from 'react';
import { 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap';
import getValidity from '../getValidity/getValidity';

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
            checked={options[option].isActive}
            valid={getValidity(hasError, errorMessage)}
          />
          <Label check>
            {options[option].text}
          </Label>
        </FormGroup>
      ))
    }
  </FormGroup>
);

export default CheckboxInput;