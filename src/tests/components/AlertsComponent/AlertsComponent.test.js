import React from 'react';
import { shallow } from 'enzyme';
import AlertsComponent from '../../../components/AlertsComponent/AlertsComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AlertsComponent />);
});

test('should render AlertsComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
