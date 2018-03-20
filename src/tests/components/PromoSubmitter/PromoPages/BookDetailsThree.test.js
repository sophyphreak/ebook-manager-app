import React from 'react';
import { shallow } from 'enzyme';
import BookDetailsThree from '../../../../components/PromoSubmitter/PromoPages/BookDetailsThree';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BookDetailsThree />);
});

test('should render BookDetailsThree correctly', () => {
  expect(wrapper).toMatchSnapshot();
});