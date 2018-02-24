import React from 'react';
import { shallow } from 'enzyme';
import PressRelease from '../../../components/FormElements/PressRelease';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PressRelease />);
});

test('should render PressRelease correctly', () => {
  expect(wrapper).toMatchSnapshot();
});