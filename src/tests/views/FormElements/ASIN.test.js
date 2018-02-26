import React from 'react';
import { shallow } from 'enzyme';
import ASIN from '../../../views/FormElements/ASIN';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ASIN />);
});

test('should render ASIN correctly', () => {
  expect(wrapper).toMatchSnapshot();
});