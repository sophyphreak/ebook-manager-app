import React from 'react';
import { shallow } from 'enzyme';
import MediaSuccess from '../../../../views/MediaComponent/MediaPages/MediaSuccess';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MediaSuccess />);
});

test('should render MediaSuccess correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
