import React from 'react';
import { shallow } from 'enzyme';
import LastName from '../../../views/FormElements/LastName';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LastName />);
});

test('should render LastName correctly', () => {
  expect(wrapper).toMatchSnapshot();
});