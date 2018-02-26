import React from 'react';
import { shallow } from 'enzyme';
import EndDate from '../../../views/FormElements/EndDate';

let wrapper, onDateChange, onFocusChange;

beforeEach(() => {
  onDateChange = () => {};
  onFocusChange = () => {};
  wrapper = shallow(
    <EndDate
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
  );
});

test('should render EndDate correctly', () => {
  expect(wrapper).toMatchSnapshot();
});