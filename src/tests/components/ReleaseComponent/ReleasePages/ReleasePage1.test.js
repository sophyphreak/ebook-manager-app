import React from 'react';
import { shallow } from 'enzyme';
import ReleasePage1 from '../../../../components/ReleaseComponent/ReleasePages/ReleasePage1';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<ReleasePage1 error={error} />);
});

test('should render ReleasePage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
