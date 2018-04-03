import React from 'react';
import { shallow } from 'enzyme';
import PromoPage1 from '../../../../components/PromoComponent/PromoPages/PromoPage1';

let error, wrapper;

beforeEach(() => {
  error = {
    message: "",
    title: "",
    asin: "",
    amazonUrl: "",
    fictionOrNonFiction: "",
    genre: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  wrapper = shallow(<PromoPage1 error={error} />);
});

test('should render PromoPage1 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});