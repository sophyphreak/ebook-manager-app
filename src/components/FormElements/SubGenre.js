import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const SubGenre = (props) => (
  <BasicInput
    label="Sub Genre:"
    {...props}
  />
);

export default SubGenre;