import React from 'react';
import { shallow } from 'enzyme';
import RadioInput from '../../../../components/FormElements/MainElements/RadioInput';

let options, wrapper;

beforeEach(() => {
  options = ['option 0', 'option 1', 'option 2'];
  wrapper = shallow(<RadioInput options={options} />);
});

test('should render RadioInput correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
