import React from 'react';
import { shallow } from 'enzyme';
import AmazonUrl from '../../../views/FormElements/AmazonUrl';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AmazonUrl />);
});

test('should render AmazonUrl correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
