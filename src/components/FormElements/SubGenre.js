import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const SubGenre = ({
  label,
  subGenre,
  onSubGenreChange,
  ...props
}) => (
  <BasicInput
    label={label}
    value={subGenre}
    onChange={onSubGenreChange}
    {...props}
  />
);

export default SubGenre;