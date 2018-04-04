import getBodyRowOrder from '../../submitterUtils/getBodyRowOrder';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const alertToNodemailer = ({
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
    body,
    rowOrder
  } = getBodyRowOrder(rawBody);
  const userEmail = email;
  
  postToNodemailer(submissionType, body, rowOrder, userEmail)
};

export default alertToNodemailer;