import React, { Component } from 'react';
import TextAreaInput from './MainElements/TextAreaInput';

const AuthorBio = ({
  label,
  authorBio,
  onAuthorBioChange,
  ...props
}) => (
  <TextAreaInput
    label={label}
    value={authorBio}
    onChange={onAuthorBioChange}
    {...props}
  />
);

export default AuthorBio;