import React, { Component } from 'react';
import SelectInput from './MainElements/SelectInput';
import genreOptions from './options/genreOptions';

const Genre = ({
  label,
  genre,
  onGenreChange,
  ...props
}) => (
  <SelectInput
    label={label}
    value={genre}
    onChange={onGenreChange}
    options={genreOptions}
    {...props}
  />
);

export default Genre; 