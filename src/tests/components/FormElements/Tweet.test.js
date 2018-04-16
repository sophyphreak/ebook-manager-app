import React from 'react';
import { shallow } from 'enzyme';
import Tweet from '../../../components/FormElements/Tweet';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Tweet />);
});

test('should render Tweet correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
