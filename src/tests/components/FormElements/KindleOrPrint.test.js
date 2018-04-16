import React from 'react';
import { shallow } from 'enzyme';
import KindleOrPrint from '../../../components/FormElements/KindleOrPrint';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<KindleOrPrint />);
});

test('should render KindleOrPrint correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
