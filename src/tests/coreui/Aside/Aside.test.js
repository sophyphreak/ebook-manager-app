import React from 'react';
import { shallow } from 'enzyme';
import Aside from '../../../coreui/Aside/Aside';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Aside />);
});

test('should render Aside correctly', () => {
  expect(wrapper).toMatchSnapshot();
});