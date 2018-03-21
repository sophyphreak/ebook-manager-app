import React from 'react';
import { shallow } from 'enzyme';
import AlertsPage3 from '../../../../components/AlertsComponent/AlertsPages/AlertsPage3';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertsPage3 />);
});

test('should render AlertsPage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});