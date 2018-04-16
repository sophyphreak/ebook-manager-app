import React from 'react';
import { shallow } from 'enzyme';
import ReleaseSubmitter from '../../../containers/ReleaseSubmitter/ReleaseSubmitter';

let wrapper;

beforeEach(() => {
  Date.now = jest.fn(() => 1487076708000);
  wrapper = shallow(<ReleaseSubmitter />);
});

test('should render ReleaseSubmitter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
