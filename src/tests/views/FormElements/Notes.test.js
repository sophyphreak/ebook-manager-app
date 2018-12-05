import React from 'react';
import { shallow } from 'enzyme';
import Notes from '../../../views/FormElements/Notes';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Notes />);
});

test('should render Notes correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
