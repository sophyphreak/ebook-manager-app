import React from 'react';
import { shallow } from 'enzyme';
import SubGenre from '../../../components/FormElements/SubGenre';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SubGenre />);
});

test('should render SubGenre correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
