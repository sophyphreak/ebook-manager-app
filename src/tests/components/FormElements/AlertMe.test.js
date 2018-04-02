import React from 'react';
import { shallow } from 'enzyme';
import AlertMe from '../../../components/FormElements/AlertMe';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertMe />);
});

test('should render AlertMe correctly', () => {
  expect(wrapper).toMatchSnapshot();
});