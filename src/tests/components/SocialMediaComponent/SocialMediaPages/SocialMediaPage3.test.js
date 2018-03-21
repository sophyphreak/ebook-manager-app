import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaPage3 from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaPage3';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SocialMediaPage3 />);
});

test('should render SocialMediaPage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});