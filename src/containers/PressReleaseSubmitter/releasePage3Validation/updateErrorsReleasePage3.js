
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist';
import websiteUrlIsInvalid from './fieldSpecific/websiteUrlIsInvalid';
import releaseTextDoesNotExist from './fieldSpecific/releaseTextDoesNotExist';


const updateErrorsReleasePage3 = ({
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

export default updateErrorsReleasePage3;