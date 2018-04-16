import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaSuccess from '../../../../components/SocialMediaComponent/SocialMediaPages/SocialMediaSuccess';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SocialMediaSuccess />);
});

test('should render SocialMediaSuccess correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
