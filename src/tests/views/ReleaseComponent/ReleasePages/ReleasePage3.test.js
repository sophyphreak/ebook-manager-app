import React from 'react';
import { shallow } from 'enzyme';
import ReleasePage3 from '../../../../views/ReleaseComponent/ReleasePages/ReleasePage3';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<ReleasePage3 error={error} />);
});

test('should render ReleasePage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
