import React from 'react';
import { shallow } from 'enzyme';
import CurrentPrice from '../../../views/FormElements/CurrentPrice';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CurrentPrice />);
});

test('should render CurrentPrice correctly', () => {
  expect(wrapper).toMatchSnapshot();
});