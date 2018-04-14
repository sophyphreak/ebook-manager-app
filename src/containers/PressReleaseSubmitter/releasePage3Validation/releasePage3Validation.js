
import {
  websiteUrlIsInvalid,
  releaseTextDoesNotExist,
  doErrorsExist
} from 'dao-of-validation';

const releasePage3Validation = ({
  website,
  releaseText
}) => {
  let error = {};
  if (websiteUrlIsInvalid(website)) {
    error.website = "Please enter a valid URL.";
  }
  if (releaseTextDoesNotExist(releaseText)) {
    error.releaseText = "Please enter an author biography.";
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

export default releasePage3Validation;