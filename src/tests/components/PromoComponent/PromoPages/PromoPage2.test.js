import React from 'react';
import { shallow } from 'enzyme';
import PromoPage2 from '../../../../components/PromoComponent/PromoPages/PromoPage2';

let error, wrapper;

beforeEach(() => {
  error = {
    message: "",
    price: "",
    promoType: ""
  };
  wrapper = shallow(<PromoPage2 error={error} />);
});

test('should render PromoPage2 correctly', () => {
  expect(wrapper).toMatchSnapshot();
});