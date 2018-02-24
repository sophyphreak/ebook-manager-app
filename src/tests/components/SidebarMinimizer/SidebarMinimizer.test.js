import React from 'react';
import { shallow } from 'enzyme';
import SidebarMinimizer from '../../../components/SidebarMinimizer/SidebarMinimizer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SidebarMinimizer />);
});

test('should render SidebarMinimizer correctly', () => {
  expect(wrapper).toMatchSnapshot();
});