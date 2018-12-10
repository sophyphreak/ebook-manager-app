import React from 'react';
import TextAreaInput from './MainElements/TextAreaInput';

const Description = ({ label, description, onDescriptionChange, ...props }) => (
  <TextAreaInput
    label={label}
    value={description}
    onChange={onDescriptionChange}
    {...props}
  />
);

export default Description;
