import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaPage2 from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaPage2';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SocialMediaPage2 />);
});

test('should render SocialMediaPage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});