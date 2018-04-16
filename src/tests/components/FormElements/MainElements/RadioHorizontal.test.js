import React from 'react';
import { shallow } from 'enzyme';
import RadioHorizontal from '../../../../components/FormElements/MainElements/RadioHorizontal';

let options, wrapper;

beforeEach(() => {
  options = ['option 0', 'option 1', 'option 2'];
  wrapper = shallow(<RadioHorizontal options={options} />);
});

test('should render RadioHorizontal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
