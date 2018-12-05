import React from 'react';
import { shallow } from 'enzyme';
import AuthorBio from '../../../views/FormElements/AuthorBio';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AuthorBio />);
});

test('should render AuthorBio correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
