import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaComponent from '../../../components/SocialMediaComponent/SocialMediaComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SocialMediaComponent />);
});

test('should render SocialMediaComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
