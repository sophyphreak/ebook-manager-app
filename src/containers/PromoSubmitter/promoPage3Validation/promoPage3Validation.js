import { thisIsEmpty, doErrorsExist } from 'dao-of-validation';

const promoPage3Validation = ({ description, authorBio }) => {
  let error = {};
  if (thisIsEmpty(description)) {
    error.description = 'Please enter a book description.';
  }
  if (thisIsEmpty(authorBio)) {
    error.authorBio = 'Please enter an author biography.';
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

export default promoPage3Validation;
