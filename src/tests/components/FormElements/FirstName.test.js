import React from 'react';
import { shallow } from 'enzyme';
import FirstName from '../../../components/FormElements/FirstName';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<FirstName />);
});

test('should render FirstName correctly', () => {
  expect(wrapper).toMatchSnapshot();
});