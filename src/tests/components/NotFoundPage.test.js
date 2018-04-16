import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NotFoundPage />);
});

test('should render NotFoundPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
