import React from 'react';
import { shallow } from 'enzyme';
import PromoSubmitter from '../../../views/PromoSubmitter/PromoSubmitter';

let wrapper;

beforeEach(() => {
  Date.now = jest.fn(() => 1487076708000)
  wrapper = shallow(<PromoSubmitter />);
});

test('should render PromoSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});