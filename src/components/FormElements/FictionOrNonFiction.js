import React, { Component } from 'react';
import RadioHorizontal from './MainElements/RadioHorizontal';
import nonFictionOrFictionOptions from './options/nonFictionOrFictionOptions';

const FictionOrNonFiction = (props) => (
  <RadioHorizontal
    label=""
    options={nonFictionOrFictionOptions}
    {...props}
  />
);

export default FictionOrNonFiction;