import React from 'react';
import { shallow } from 'enzyme';
import PromoComponent from '../../../components/PromoSubmitter/PromoComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoComponent />);
});

test('should render PromoComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});