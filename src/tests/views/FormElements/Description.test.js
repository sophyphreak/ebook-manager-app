import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../../views/FormElements/Description';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Description />);
});

test('should render Description correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
