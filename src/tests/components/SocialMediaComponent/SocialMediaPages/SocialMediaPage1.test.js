import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaPage1 from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaPage1';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ""
  };
  wrapper = shallow(<SocialMediaPage1 error={error} />);
});

test('should render SocialMediaPage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});