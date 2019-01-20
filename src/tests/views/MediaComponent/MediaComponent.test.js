import React from 'react';
import { shallow } from 'enzyme';
import MediaView from '../../../views/MediaView/MediaView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MediaView />);
});

test('should render MediaView correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
