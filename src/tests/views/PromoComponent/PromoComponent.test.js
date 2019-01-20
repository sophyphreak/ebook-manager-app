import React from 'react';
import { shallow } from 'enzyme';
import PromoView from '../../../views/PromoView/PromoView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoView />);
});

test('should render PromoView correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
