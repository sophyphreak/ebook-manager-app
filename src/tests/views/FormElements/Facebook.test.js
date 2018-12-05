import React from 'react';
import { shallow } from 'enzyme';
import Facebook from '../../../views/FormElements/Facebook';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Facebook />);
});

test('should render Facebook correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
