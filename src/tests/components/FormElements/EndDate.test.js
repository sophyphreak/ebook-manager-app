import React from 'react';
import { shallow } from 'enzyme';
import EndDate from '../../../components/FormElements/EndDate';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<EndDate />);
});

test('should render EndDate correctly', () => {
  expect(wrapper).toMatchSnapshot();
});