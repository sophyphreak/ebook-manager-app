import React from 'react';
import { shallow } from 'enzyme';
import ReleaseSuccess from '../../../../views/ReleaseView/ReleasePages/ReleaseSuccess';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ReleaseSuccess />);
});

test('should render ReleaseSuccess correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
