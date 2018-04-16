import {
  amazonUrlExistsButIsInvalid,
  thisIsEmpty,
  emailExistsButIsInvalid,
  doErrorsExist
} from 'dao-of-validation';

import noAlertMeIsSelected from './fieldSpecific/noAlertMeIsSelected';

const alertsPageValidation = ({
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
  if (thisIsEmpty(notes)) {
    error.notes = 'Please enter notes.';
  };
  if (thisIsEmpty(email)) {
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

export default alertsPageValidation;

