import React from 'react';
import { shallow } from 'enzyme';
import ReleasePage2 from '../../../../views/ReleaseComponent/ReleasePages/ReleasePage2';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<ReleasePage2 error={error} />);
});

test('should render ReleasePage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
