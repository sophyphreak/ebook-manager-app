import React from 'react';
import TextAreaInput from './MainElements/TextAreaInput';

const Notes = ({ label, notes, onNotesChange, ...props }) => (
  <TextAreaInput
    label={label}
    value={notes}
    onChange={onNotesChange}
    {...props}
  />
);

export default Notes;
