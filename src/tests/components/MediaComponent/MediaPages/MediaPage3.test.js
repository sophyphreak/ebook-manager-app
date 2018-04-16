import React from 'react';
import { shallow } from 'enzyme';
import MediaPage3 from '../../../../components/MediaComponent/MediaPages/MediaPage3';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<MediaPage3 error={error} />);
});

test('should render MediaPage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
