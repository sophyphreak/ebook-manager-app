import React from 'react';
import { shallow } from 'enzyme';
import SidebarFooter from '../../../coreui/SidebarFooter/SidebarFooter';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SidebarFooter />);
});

test('should render SidebarFooter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
