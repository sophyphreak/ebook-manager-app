import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../coreui/Header/Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
