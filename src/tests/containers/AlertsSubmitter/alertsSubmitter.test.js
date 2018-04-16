import React from 'react';
import { shallow } from 'enzyme';
import AlertsSubmitter from '../../../containers/AlertsSubmitter/AlertsSubmitter';

let wrapper;

beforeEach(() => {
  Date.now = jest.fn(() => 1487076708000);
  wrapper = shallow(<AlertsSubmitter />);
});

test('should render AlertsSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
