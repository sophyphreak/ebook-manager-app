import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

test('should render Footer correctly', () => {
  expect(wrapper).toMatchSnapshot();
});