import React from 'react';
import { shallow } from 'enzyme';
import NonFictionOrFiction from '../../../components/FormElements/NonFictionOrFiction';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NonFictionOrFiction />);
});

test('should render NonFictionOrFiction correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
