import React from 'react';
import { shallow } from 'enzyme';
import FictionOrNonFiction from '../../../components/FormElements/FictionOrNonFiction';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<FictionOrNonFiction />);
});

test('should render FictionOrNonFiction correctly', () => {
  expect(wrapper).toMatchSnapshot();
});