import React from 'react';
import { shallow } from 'enzyme';
import AlertsView from '../../../views/AlertsView/AlertsView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertsView />);
});

test('should render AlertsView correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
