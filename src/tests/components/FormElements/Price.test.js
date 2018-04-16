import React from 'react';
import { shallow } from 'enzyme';
import Price from '../../../components/FormElements/Price';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Price />);
});

test('should render Price correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
