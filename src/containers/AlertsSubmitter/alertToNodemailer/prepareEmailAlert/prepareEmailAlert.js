import getBodyRowOrder from '../../../submitterUtils/getBodyRowOrder';

const prepareEmailAlert = ({
  amazonUrl,
  alertMe,
  date,
  notes,
  email,
  email2
}) => {
  const {
    onTheDate,
    oneWeekBefore,
    twoWeeksBefore
  } = alertMe;

  const submissionType = 'Alert';
  const rawBody = {
    'Amazon URL': amazonUrl,
    'Alert Me': onTheDate.isActive && onTheDate.text,
    'Alert Me ': oneWeekBefore.isActive && oneWeekBefore.text,
    'Alert Me  ': twoWeeksBefore.isActive && twoWeeksBefore.text,
    'Date': date.format("MMMM Do YYYY"),
    'Notes/Other Info': notes,
    'Email to nofify': email,
    'Secondary email': email2
  };
  console.log(rawBody);
  const {
    emailBody,
    rowOrder
  } = getBodyRowOrder(rawBody);
  const userEmail = email;
  
  return {
    submissionType, 
    emailBody, 
    rowOrder, 
    userEmail
  };
};

export default prepareEmailAlert;