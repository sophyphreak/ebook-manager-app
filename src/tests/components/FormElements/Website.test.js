import React from 'react';
import { shallow } from 'enzyme';
import Website from '../../../components/FormElements/Website';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Website />);
});

test('should render Website correctly', () => {
  expect(wrapper).toMatchSnapshot();
});