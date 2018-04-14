
import descriptionDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/descriptionDoesNotExist';
import authorBioDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/authorBioDoesNotExist';
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist';


const promoPage3Validation = ({
  description,
  authorBio
}) => {
  let error = {};
  if (descriptionDoesNotExist(description)) {
    error.description = "Please enter a book description.";    
  }
  if (authorBioDoesNotExist(authorBio)) {
    error.authorBio = "Please enter an author biography.";    
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

export default promoPage3Validation;