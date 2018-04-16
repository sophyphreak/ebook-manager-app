import { thisIsEmpty, doErrorsExist } from 'dao-of-validation';

const promoPage2Validation = ({ price }) => {
  let error = {};
  if (thisIsEmpty(price)) {
    error.price = 'Please enter a price.';
  }
  const errorsExist = doErrorsExist(error);
  if (errorsExist) {
    error.message = 'Please fix errors.';
  }
  return {
    error,
    errorsExist
  };
};

export default promoPage2Validation;
