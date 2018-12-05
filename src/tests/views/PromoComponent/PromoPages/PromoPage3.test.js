import React from 'react';
import { shallow } from 'enzyme';
import PromoPage3 from '../../../../views/PromoComponent/PromoPages/PromoPage3';

let error, wrapper;

beforeEach(() => {
  error = {
    message: '',
    description: '',
    authorBio: ''
  };
  wrapper = shallow(<PromoPage3 error={error} />);
});

test('should render PromoPage3 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
