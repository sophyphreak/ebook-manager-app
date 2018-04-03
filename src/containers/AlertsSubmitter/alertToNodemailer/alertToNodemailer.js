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
  let onTheDate, oneWeekBefore, twoWeeksBefore;
  if (alertMe['On the date']) {
    onTheDate = 'On the date';
  };
  if (alertMe['One week before']) {
    oneWeekBefore = 'One week before';
  };
  if (alertMe['Two weeks before']) {
    twoWeeksBefore = 'Two weeks before';
  };

  const submissionType = 'Alert';
  const rawBody = {
    'Amazon URL': amazonUrl,
    'Alert Me': onTheDate,
    'Alert Me ': oneWeekBefore,
    'Alert Me  ': twoWeeksBefore,
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