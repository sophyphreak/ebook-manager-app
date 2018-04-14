
import priceDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/priceDoesNotExist';
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist';


const mediaPage2Validation = ({
  regPrice
}) => {
  let error = {};
  if (priceDoesNotExist(regPrice)) {
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