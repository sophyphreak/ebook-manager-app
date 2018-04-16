import prepareEmailRelease from './prepareEmailRelease/prepareEmailRelease';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const sendReleaseToNodemailer = state => {
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepareEmailRelease(state);
  postToNodemailer(submissionType, emailBody, rowOrder, userEmail);
};

export default sendReleaseToNodemailer;
