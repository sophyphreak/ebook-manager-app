import React from 'react';
import { shallow } from 'enzyme';
import BasicInput from '../../../../views/FormElements/MainElements/BasicInput';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BasicInput />);
});

test('should render BasicInput correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
