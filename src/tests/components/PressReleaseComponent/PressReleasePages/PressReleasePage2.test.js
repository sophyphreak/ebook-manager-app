import React from 'react';
import { shallow } from 'enzyme';
import PressReleasePage2 from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleasePage2';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<PressReleasePage2 error={error} />);
});

test('should render PressReleasePage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
