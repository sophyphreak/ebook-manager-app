import React from 'react';
import { shallow } from 'enzyme';
import PressReleasePage1 from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleasePage1';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PressReleasePage1 />);
});

test('should render PressReleasePage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});