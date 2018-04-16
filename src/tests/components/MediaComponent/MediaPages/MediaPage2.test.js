import React from 'react';
import { shallow } from 'enzyme';
import MediaPage2 from '../../../../components/MediaComponent/MediaPages/MediaPage2';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<MediaPage2 error={error} />);
});

test('should render MediaPage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
