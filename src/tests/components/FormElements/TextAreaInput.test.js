import React from 'react';
import { shallow } from 'enzyme';
import TextAreaInput from '../../../components/FormElements/TextAreaInput';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<TextAreaInput />);
});

test('should render TextAreaInput correctly', () => {
  expect(wrapper).toMatchSnapshot();
});