import React, { Component } from 'react';
import BasicInput from './BasicInput';

const SubGenre = (props) => (
  <BasicInput
    label="Sub Genre:"
    {...props}
  />
);

export default SubGenre;