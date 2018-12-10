import React from 'react';
import RadioHorizontal from './MainElements/RadioHorizontal';
import nonFictionOrFictionOptions from './options/nonFictionOrFictionOptions';

const NonFictionOrFiction = ({
  nonFictionOrFiction,
  onNonFictionOrFictionChange,
  ...props
}) => (
  <RadioHorizontal
    label=""
    value={nonFictionOrFiction}
    onChange={onNonFictionOrFictionChange}
    options={nonFictionOrFictionOptions}
    {...props}
  />
);

export default NonFictionOrFiction;
