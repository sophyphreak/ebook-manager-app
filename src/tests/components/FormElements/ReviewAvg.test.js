import React from 'react';
import { shallow } from 'enzyme';
import ReviewAvg from '../../../components/FormElements/ReviewAvg';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ReviewAvg />);
});

test('should render ReviewAvg correctly', () => {
  expect(wrapper).toMatchSnapshot();
});