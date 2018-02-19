import React from 'react';
import { shallow } from 'enzyme';
import SidebarForm from '../../components/SidebarForm/SidebarForm';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SidebarForm />);
});

test('should render SidebarForm correctly', () => {
  expect(wrapper).toMatchSnapshot();
});