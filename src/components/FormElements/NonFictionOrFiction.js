import React, { Component } from 'react';
import RadioHorizontal from './MainElements/RadioHorizontal';
import nonFictionOrFictionOptions from './options/nonFictionOrFictionOptions';

const NonFictionOrFiction = (props) => (
  <RadioHorizontal
    label=""
    options={nonFictionOrFictionOptions}
    {...props}
  />
);

export default NonFictionOrFiction;