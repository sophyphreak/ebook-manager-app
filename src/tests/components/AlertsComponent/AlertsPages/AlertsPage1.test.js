import React from 'react';
import { shallow } from 'enzyme';
import AlertsPage1 from '../../../../components/AlertsComponent/AlertsPages/AlertsPage1';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertsPage1 />);
});

test('should render AlertsPage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});