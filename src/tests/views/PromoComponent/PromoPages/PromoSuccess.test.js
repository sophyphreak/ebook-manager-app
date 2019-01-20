import React from 'react';
import { shallow } from 'enzyme';
import PromoSuccess from '../../../../views/PromoView/PromoPages/PromoSuccess';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoSuccess />);
});

test('should render PromoSuccess correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
