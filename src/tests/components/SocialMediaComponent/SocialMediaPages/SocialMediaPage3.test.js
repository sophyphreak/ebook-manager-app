import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaPage3 from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaPage3';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ""
  };
  wrapper = shallow(<SocialMediaPage3 error={error} />);
});

test('should render SocialMediaPage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});