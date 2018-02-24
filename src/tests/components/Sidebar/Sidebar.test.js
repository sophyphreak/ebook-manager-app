import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../../components/Sidebar/Sidebar';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Sidebar />);
});

test('should render Sidebar correctly', () => {
  expect(wrapper).toMatchSnapshot();
});