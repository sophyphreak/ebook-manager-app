import React from 'react';
import { shallow } from 'enzyme';
import PromoSubmitter from '../../../components/PromoSubmitter/PromoSubmitter';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PromoSubmitter />);
});

test('should render PromoSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});