import React from 'react';
import { shallow } from 'enzyme';
import SalesView from '../../../views/SalesView/SalesView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SalesView />);
});

test('should render SalesView correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
