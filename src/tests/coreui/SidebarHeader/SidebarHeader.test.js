import React from 'react';
import { shallow } from 'enzyme';
import SidebarHeader from '../../../coreui/SidebarHeader/SidebarHeader';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SidebarHeader />);
});

test('should render SidebarHeader correctly', () => {
  expect(wrapper).toMatchSnapshot();
});