import prepareEmailAlert from './prepareEmailAlert/prepareEmailAlert';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const sendAlertToNodemailer = state => {
  const emailAlert = prepareEmailAlert(state);
  const { submissionType, emailBody, rowOrder, userEmail } = emailAlert;
  postToNodemailer(submissionType, emailBody, rowOrder, userEmail);
};

export default sendAlertToNodemailer;
