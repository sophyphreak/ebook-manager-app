import React from 'react';
import { shallow } from 'enzyme';
import AlertsSuccess from '../../../../views/AlertsView/AlertsPage/AlertsSuccess';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertsSuccess />);
});

test('should render AlertsSuccess correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
