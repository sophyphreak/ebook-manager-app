import React, { Component } from 'react';
import SelectInput from './MainElements/SelectInput';
import genreOptions from './options/genreOptions';

const Genre = ({
  isGenreDisabled,
  ...props
}) => (
  <SelectInput
    label="Genre:*"
    options={genreOptions}
    {...props}
  />
);

export default Genre; 