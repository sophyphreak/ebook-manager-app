import React from 'react';
import { shallow } from 'enzyme';
import RegPrice from '../../../views/FormElements/RegPrice';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<RegPrice />);
});

test('should render RegPrice correctly', () => {
  expect(wrapper).toMatchSnapshot();
});