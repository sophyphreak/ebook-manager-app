import React from 'react';
import { shallow } from 'enzyme';
import IsFiction from '../../../components/FormElements/IsFiction';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<IsFiction />);
});

test('should render IsFiction correctly', () => {
  expect(wrapper).toMatchSnapshot();
});