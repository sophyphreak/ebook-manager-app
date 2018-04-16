import React from 'react';
import { shallow } from 'enzyme';
import Full from '../../../containers/Full/Full';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Full />);
});

test('should render Full correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
