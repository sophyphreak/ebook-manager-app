import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../../../coreui/Breadcrumb/Breadcrumb';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Breadcrumb />);
});

test('should render Breadcrumb correctly', () => {
  expect(wrapper).toMatchSnapshot();
});