import React from 'react';
import { shallow } from 'enzyme';
import ReleaseText from '../../../components/FormElements/ReleaseText';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ReleaseText />);
});

test('should render ReleaseText correctly', () => {
  expect(wrapper).toMatchSnapshot();
});