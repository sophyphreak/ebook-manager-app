import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaPage1 from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaPage1';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SocialMediaPage1 />);
});

test('should render SocialMediaPage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});