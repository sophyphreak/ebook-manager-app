import React from 'react';
import { shallow } from 'enzyme';
import ReleaseView from '../../../views/ReleaseView/ReleaseView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ReleaseView />);
});

test('should render ReleaseView correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
