import React from 'react';
import { shallow } from 'enzyme';
import SalesComponent from '../../../views/SalesComponent/SalesComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SalesComponent />);
});

test('should render SalesComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
