import React from 'react';
import { shallow } from 'enzyme';
import Keywords from '../../../components/FormElements/Keywords';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Keywords />);
});

test('should render Keywords correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
