import React from 'react';
import { shallow } from 'enzyme';
import DatesPicker from '../../../components/FormElements/DatesPicker';

let onDatesChange, onFocusChange, wrapper;

beforeEach(() => {
  onDatesChange = jest.fn();
  onFocusChange = jest.fn();
  wrapper = shallow(
    <DatesPicker 
      onDatesChange={onDatesChange}
      onFocusChange={onFocusChange}
    />
  );
});

test('should render DatesPicker correctly', () => {
  expect(wrapper).toMatchSnapshot();
});