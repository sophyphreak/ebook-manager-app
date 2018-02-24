import React from 'react';
import { shallow } from 'enzyme';
import NumReviews from '../../../components/FormElements/NumReviews';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NumReviews />);
});

test('should render NumReviews correctly', () => {
  expect(wrapper).toMatchSnapshot();
});