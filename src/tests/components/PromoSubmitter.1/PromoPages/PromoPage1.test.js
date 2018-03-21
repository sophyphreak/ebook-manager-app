import React from 'react';
import { shallow } from 'enzyme';
import PromoPage1 from '../../../../components/PromoComponent/PromoPages/PromoPage1';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoPage1 />);
});

test('should render PromoPage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});