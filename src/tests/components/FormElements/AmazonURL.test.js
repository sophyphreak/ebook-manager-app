import React from 'react';
import { shallow } from 'enzyme';
import AmazonURL from '../../../components/FormElements/AmazonURL';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AmazonURL />);
});

test('should render AmazonURL correctly', () => {
  expect(wrapper).toMatchSnapshot();
});