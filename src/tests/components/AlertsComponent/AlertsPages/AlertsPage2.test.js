import React from 'react';
import { shallow } from 'enzyme';
import AlertsPage2 from '../../../../components/AlertsComponent/AlertsPages/AlertsPage2';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertsPage2 />);
});

test('should render AlertsPage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});