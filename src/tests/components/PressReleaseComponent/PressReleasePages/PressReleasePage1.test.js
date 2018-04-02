import React from 'react';
import { shallow } from 'enzyme';
import PressReleasePage1 from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleasePage1';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ""
  };
  wrapper = shallow(<PressReleasePage1 error={error} />);
});

test('should render PressReleasePage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});