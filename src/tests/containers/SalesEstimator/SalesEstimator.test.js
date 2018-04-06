import React from 'react';
import { shallow } from 'enzyme';
import SalesEstimator from '../../../containers/SalesEstimator/SalesEstimator';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SalesEstimator />);
});

test('should render SalesEstimator correctly', () => {
  expect(wrapper).toMatchSnapshot();
});