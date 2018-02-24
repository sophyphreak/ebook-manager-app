import React from 'react';
import { shallow } from 'enzyme';
import StartDate from '../../../components/FormElements/StartDate';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<StartDate />);
});

test('should render StartDate correctly', () => {
  expect(wrapper).toMatchSnapshot();
});