import React from 'react';
import { shallow } from 'enzyme';
import PressReleaseComponent from '../../../components/PressReleaseComponent/PressReleaseComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PressReleaseComponent />);
});

test('should render PressReleaseComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
