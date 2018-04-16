import React from 'react';
import { shallow } from 'enzyme';
import MediaSubmitter from '../../../containers/MediaSubmitter/MediaSubmitter';

let wrapper;

beforeEach(() => {
  Date.now = jest.fn(() => 1487076708000);
  wrapper = shallow(<MediaSubmitter />);
});

test('should render MediaSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
