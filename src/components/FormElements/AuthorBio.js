import React, { Component } from 'react';
import TextAreaInput from './MainElements/TextAreaInput';

const AuthorBio = (props) => (
  <TextAreaInput
    label="Author Biography:*"
    {...props}
  />
);

export default AuthorBio;