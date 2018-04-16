import React from 'react';

import RadioInput from './MainElements/RadioInput';

const KindleOrPrint = ({ kindleOrPrint, onKindleOrPrintChange, ...props }) => (
  <RadioInput
    options={['Kindle book', 'Print book']}
    value={kindleOrPrint}
    onChange={onKindleOrPrintChange}
  />
);

export default KindleOrPrint;
