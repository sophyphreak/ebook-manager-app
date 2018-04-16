import React from 'react';
import { shallow } from 'enzyme';
import PressReleaseSuccess from '../../../../components/PressReleaseComponent/PressReleasePages/PressReleaseSuccess';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PressReleaseSuccess />);
});

test('should render PressReleaseSuccess correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
