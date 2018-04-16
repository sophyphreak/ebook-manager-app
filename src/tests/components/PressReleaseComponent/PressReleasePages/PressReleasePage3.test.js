import React from 'react';
import { shallow } from 'enzyme';
import PressReleasePage3 from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleasePage3';

let error, wrapper;

beforeEach(() => {
  error = {
    message: ''
  };
  wrapper = shallow(<PressReleasePage3 error={error} />);
});

test('should render PressReleasePage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
