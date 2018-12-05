import React from 'react';
import { shallow } from 'enzyme';
import Email from '../../../views/FormElements/Email';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Email />);
});

test('should render Email correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
