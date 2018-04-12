
import priceDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/priceDoesNotExist';
import promoTypeDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/promoTypeDoesNotExist';
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist';


const updateErrorsPromoPage2 = ({
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

export default updateErrorsPromoPage2;