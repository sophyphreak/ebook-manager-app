import prepareEmailMedia from './prepareEmailMedia/prepareEmailMedia';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const sendMediaToNodemailer = state => {
  const { submissionType, emailBody, rowOrder, userEmail } = prepareEmailMedia(
    state
  );
  postToNodemailer(submissionType, emailBody, rowOrder, userEmail);
};

export default sendMediaToNodemailer;
