import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../../components/FormElements/Title';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Title />);
});

test('should render Title correctly', () => {
  expect(wrapper).toMatchSnapshot();
});