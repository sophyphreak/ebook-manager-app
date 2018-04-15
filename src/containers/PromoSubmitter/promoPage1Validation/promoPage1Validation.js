import {
  amazonUrlDoesNotExist,
  amazonUrlExistsButIsInvalid,
  emailDoesNotExist,
  emailExistsButIsInvalid,
  doErrorsExist
} from 'dao-of-validation';

import fictionIsSelectedButGenreIsNotSelected from '../../submitterUtils/validation/fictionIsSelectedButGenreIsNotSelected';

const promoPage1Validation = ({
  amazonUrl,
  nonFictionOrFiction,
  genre,
  email
}) => {
  let error = {};
  if (amazonUrlDoesNotExist(amazonUrl)) {
    error.amazonUrl = 'Please enter an amazon.com URL.';
  }
  if (amazonUrlExistsButIsInvalid(amazonUrl)) {
    error.amazonUrl = 'Please provide a valid amazon.com URL.';
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

export default promoPage1Validation;