import React from 'react';
import { shallow } from 'enzyme';
import MediaPage1 from '../../../../views/MediaView/MediaPages/MediaPage1';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<MediaPage1 error={error} />);
});

test('should render MediaPage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
