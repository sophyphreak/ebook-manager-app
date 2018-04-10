import React, { Component } from 'react';
import TextAreaInput from './MainElements/TextAreaInput';

const ReleaseText = ({
  label,
  releaseText,
  onReleaseTextChange,
  ...props
}) => (
  <TextAreaInput
    label={label}
    value={releaseText}
    onChange={onReleaseTextChange}
    {...props}
  />
);

export default ReleaseText;