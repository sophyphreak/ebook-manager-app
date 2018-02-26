import React from 'react';
import { shallow } from 'enzyme';
import StartDate from '../../../views/FormElements/StartDate';

let wrapper, onDateChange, onFocusChange;

beforeEach(() => {
  onDateChange = () => {};
  onFocusChange = () => {};
  wrapper = shallow(
    <StartDate 
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
  );
});

test('should render StartDate correctly', () => {
  expect(wrapper).toMatchSnapshot();
});