import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaSubmitter from '../../../containers/SocialMediaSubmitter/SocialMediaSubmitter';

let wrapper;

beforeEach(() => {
  Date.now = jest.fn(() => 1487076708000)
  wrapper = shallow(<SocialMediaSubmitter />);
});

test('should render SocialMediaSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});