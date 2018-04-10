import React, { Component } from 'react';
import BasicInput from './MainElements/BasicInput';

const Tweet = ({
  label,
  tweet,
  onTweetChange,
  ...props
}) => (
  <BasicInput
    label={label}
    value={tweet}
    onChange={onTweetChange}
    {...props}
  />
);

export default Tweet;