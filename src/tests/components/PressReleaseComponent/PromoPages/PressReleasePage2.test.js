import React from 'react';
import { shallow } from 'enzyme';
import PressReleasePage2 from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleasePage2';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PressReleasePage2 />);
});

test('should render PressReleasePage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});