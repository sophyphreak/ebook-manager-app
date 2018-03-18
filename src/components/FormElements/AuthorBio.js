import React, { Component } from 'react';
import TextAreaInput from './TextAreaInput';

const AuthorBio = (props) => (
  <TextAreaInput
    label="Author Biography:*"
    {...props}
  />
);

export default AuthorBio;