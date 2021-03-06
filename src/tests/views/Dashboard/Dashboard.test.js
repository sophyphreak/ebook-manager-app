import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../../views/Dashboard/Dashboard';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Dashboard />);
});

test('should render Dashboard correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
