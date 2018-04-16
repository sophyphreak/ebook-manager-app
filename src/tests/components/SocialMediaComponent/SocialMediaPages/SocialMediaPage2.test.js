import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaPage2 from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaPage2';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<SocialMediaPage2 error={error} />);
});

test('should render SocialMediaPage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
