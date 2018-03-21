import React from 'react';
import { shallow } from 'enzyme';
import PressReleasePage3 from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleasePage3';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PressReleasePage3 />);
});

test('should render PressReleasePage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});