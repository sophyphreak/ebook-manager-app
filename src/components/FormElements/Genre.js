import React, { Component } from 'react';
import SelectInput from './SelectInput';

const Genre = ({
  isGenreDisabled,
  ...props
}) => (
  <SelectInput
    label="Genre:*"
    options={[
      'Please select',
      'Romance', 
      'Erotica',
      'Mystery/Thriller',
      'Science Fiction',
      'Young Adult',
      'Literary Fiction',
      'Children'
    ]}
    {...props}
  />
);

export default Genre; 