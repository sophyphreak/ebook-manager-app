import React from 'react';
import { shallow } from 'enzyme';
import ReleaseComponent from '../../../views/ReleaseComponent/ReleaseComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ReleaseComponent />);
});

test('should render ReleaseComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
