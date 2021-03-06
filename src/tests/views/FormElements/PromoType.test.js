import React from 'react';
import { shallow } from 'enzyme';
import PromoType from '../../../views/FormElements/PromoType';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoType />);
});

test('should render PromoType correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
