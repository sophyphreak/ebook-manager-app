import React from 'react';
import { shallow } from 'enzyme';
import MediaComponent from '../../../components/MediaComponent/MediaComponent';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MediaComponent />);
});

test('should render MediaComponent correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
