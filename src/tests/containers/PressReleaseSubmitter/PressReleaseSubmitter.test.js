import React from 'react';
import { shallow } from 'enzyme';
import PressReleaseSubmitter from '../../../containers/PressReleaseSubmitter/PressReleaseSubmitter';

let wrapper;

beforeEach(() => {
  Date.now = jest.fn(() => 1487076708000);
  wrapper = shallow(<PressReleaseSubmitter />);
});

test('should render PressReleaseSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
