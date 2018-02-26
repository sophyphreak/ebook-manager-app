import React from 'react';
import { shallow } from 'enzyme';
import ReviewAvg from '../../../views/FormElements/ReviewAvg';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ReviewAvg />);
});

test('should render ReviewAvg correctly', () => {
  expect(wrapper).toMatchSnapshot();
});