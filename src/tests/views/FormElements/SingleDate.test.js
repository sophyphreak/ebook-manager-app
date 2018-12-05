import React from 'react';
import { shallow } from 'enzyme';
import SingleDate from '../../../views/FormElements/SingleDate';

let onDateChange, onFocusChange, wrapper;

beforeEach(() => {
  onDateChange = jest.fn();
  onFocusChange = jest.fn();
  wrapper = shallow(
    <SingleDate onDateChange={onDateChange} onFocusChange={onFocusChange} />
  );
});

test('should render SingleDate correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
