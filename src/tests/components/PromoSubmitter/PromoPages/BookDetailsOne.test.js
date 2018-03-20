import React from 'react';
import { shallow } from 'enzyme';
import BookDetailsOne from '../../../../components/PromoSubmitter/PromoPages/BookDetailsOne';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BookDetailsOne />);
});

test('should render BookDetailsOne correctly', () => {
  expect(wrapper).toMatchSnapshot();
});