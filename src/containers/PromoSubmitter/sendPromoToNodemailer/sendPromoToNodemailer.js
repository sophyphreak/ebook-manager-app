import prepareEmailPromo from './prepareEmailPromo/prepareEmailPromo';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const sendPromoToNodemailer = (state) => {
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepareEmailPromo(state);
  postToNodemailer(submissionType, emailBody, rowOrder, userEmail);
}

export default sendPromoToNodemailer;