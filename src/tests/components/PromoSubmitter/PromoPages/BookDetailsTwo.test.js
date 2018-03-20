import React from 'react';
import { shallow } from 'enzyme';
import BookDetailsTwo from '../../../../components/PromoSubmitter/PromoPages/BookDetailsTwo';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BookDetailsTwo />);
});

test('should render BookDetailsTwo correctly', () => {
  expect(wrapper).toMatchSnapshot();
});