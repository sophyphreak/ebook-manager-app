import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from '../../../../views/FormElements/MainElements/SelectInput';

let options, wrapper;

beforeEach(() => {
  options = ['option 0', 'option 1', 'option 2'];
  wrapper = shallow(<SelectInput options={options} />);
});

test('should render SelectInput correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
