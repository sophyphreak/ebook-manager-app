import React from 'react';
import { shallow } from 'enzyme';
import AlertsPage from '../../../../views/AlertsView/AlertsPage/AlertsPage';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<AlertsPage error={error} />);
});

test('should render AlertsPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
