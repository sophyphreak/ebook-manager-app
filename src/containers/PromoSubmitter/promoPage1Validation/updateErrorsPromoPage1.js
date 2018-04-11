import amazonUrlDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/amazonUrlDoesNotExist';
import amazonUrlExistsButIsInvalid from '../../submitterUtils/validation/fieldSpecificValidators/amazonUrlExistsButIsInvalid';
import fictionIsSelectedButGenreIsNotSelected from '../../submitterUtils/validation/fieldSpecificValidators/fictionIsSelectedButGenreIsNotSelected';
import emailDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/emailDoesNotExist';
import emailExistsButIsInvalid from '../../submitterUtils/validation/fieldSpecificValidators/emailExistsButIsInvalid';
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist';


const updateErrorsPromoPage1 = ({
  amazonUrl,
  nonFictionOrFiction,
  genre,
  email
}) => {
  let error = {};
  if (amazonUrlDoesNotExist(amazonUrl)) {
    error.amazonUrl = 'Please enter an Amazon.com URL.';
  }
  if (amazonUrlExistsButIsInvalid(amazonUrl)) {
    error.amazonUrl = 'Please provide a valid Amazon.com URL.';
  };
  if (fictionIsSelectedButGenreIsNotSelected({ nonFictionOrFiction, genre })) {
    error.genre = 'This message will not render.';
  };
  if (emailDoesNotExist(email)) {
    error.email = 'Please enter an email.';
  };
  if (emailExistsButIsInvalid(email)) {
    error.email = 'Please provide a valid email address.';
  };
  const errorsExist = doErrorsExist(error);
  if (errorsExist) {
    error.message = 'Please fix errors.'
  };
  return {
    error,
    errorsExist
  };
};

export default updateErrorsPromoPage1;