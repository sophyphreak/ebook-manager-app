import React from 'react';
import { shallow } from 'enzyme';
import Cover from '../../../components/FormElements/Cover';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Cover />);
});

test('should render Cover correctly', () => {
  expect(wrapper).toMatchSnapshot();
});