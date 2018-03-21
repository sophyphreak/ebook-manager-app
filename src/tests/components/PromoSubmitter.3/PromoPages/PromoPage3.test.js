import React from 'react';
import { shallow } from 'enzyme';
import PromoPage3 from '../../../../components/PromoComponent/PromoPages/PromoPage3';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoPage3 />);
});

test('should render PromoPage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});