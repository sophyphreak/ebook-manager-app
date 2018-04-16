import {
  thisIsEmpty,
  doErrorsExist
} from 'dao-of-validation';

const mediaPage2Validation = ({
  regPrice
}) => {
  let error = {};
  if (thisIsEmpty(regPrice)) {
    error.regPrice = "Please enter a price.";
  }
  const errorsExist = doErrorsExist(error);
  if (errorsExist) {
    error.message = 'Please fix errors.'
  };
  return {
    error,
    errorsExist
  };
};

export default mediaPage2Validation;