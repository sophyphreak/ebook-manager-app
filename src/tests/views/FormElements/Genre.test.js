import React from 'react';
import { shallow } from 'enzyme';
import Genre from '../../../views/FormElements/Genre';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Genre />);
});

test('should render Genre correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
