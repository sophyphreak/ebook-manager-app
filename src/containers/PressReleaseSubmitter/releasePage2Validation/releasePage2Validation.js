
import priceDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/priceDoesNotExist';
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist';

const releasePage2Validation = ({
  price
}) => {
  let error = {};
  if (priceDoesNotExist(price)) {
    error.price = "Please enter a price.";
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

export default releasePage2Validation;