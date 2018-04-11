import amazonUrlExistsButIsInvalid from '../../submitterUtils/validation/fieldSpecificValidators/amazonUrlExistsButIsInvalid';
import noAlertMeIsSelected from './fieldSpecificValidators/noAlertMeIsSelected';
import notesDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/notesDoesNotExist';
import emailDoesNotExist from '../../submitterUtils/validation/fieldSpecificValidators/emailDoesNotExist';
import emailExistsButIsInvalid from '../../submitterUtils/validation/fieldSpecificValidators/emailExistsButIsInvalid';
import doErrorsExist from '../../submitterUtils/validation/doErrorsExist/doErrorsExist'

const updateErrorsAlertsPage = ({
  amazonUrl,
  alertMe,
  date,
  notes,
  email,
  email2
}) => {
  let error = {};
  if (amazonUrlExistsButIsInvalid(amazonUrl)) {
    error.amazonUrl = 'Please provide a valid Amazon.com URL.';
  };
  if (noAlertMeIsSelected(alertMe)) {
    error.alertMe = 'This message will not render.';
  };
  if (notesDoesNotExist(notes)) {
    error.notes = 'Please enter notes.';
  };
  if (emailDoesNotExist(email)) {
    error.email = 'Please enter an email.';
  };
  if (emailExistsButIsInvalid(email)) {
    error.email = 'Please provide a valid email address.';
  };
  if (emailExistsButIsInvalid(email2)) {
    error.email2 = 'Please provide a valid email adddress.';
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

export default updateErrorsAlertsPage;

