import prepareEmailMedia from '../prepareEmailMedia/prepareEmailMedia';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const mediaToNodemailer = (state) => {
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepareEmailMedia(state);
  postToNodemailer(submissionType, emailBody, rowOrder, userEmail);
}

export default mediaToNodemailer;