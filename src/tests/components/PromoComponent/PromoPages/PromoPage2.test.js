import React from 'react';
import { shallow } from 'enzyme';
import PromoPage2 from '../../../../components/PromoComponent/PromoPages/PromoPage2';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoPage2 />);
});

test('should render PromoPage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});