import getBodyRowOrder from '../../submitterUtils/getBodyRowOrder';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const socialMediaToNodemailer = ({
  amazonUrl,
  fictionOrNonFiction,
  genre,
  subGenre,
  email,
  regPrice,
  salePrice,
  startDate,
  endDate,
  keywords,
  tweet,
  facebook,
  notes
}) => {
  const submissionType = 'Social Media Submission';
  let rawBody = {
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': fictionOrNonFiction,
    'Genre': genre,
    'Sub-genre': subGenre,
    'Email': email,
    'Regular Price': regPrice,
    'Sale Price': salePrice,
    'Start Date': startDate && startDate.format("MMMM Do YYYY"),
    'End Date': endDate && endDate.format("MMMM Do YYYY"),
    'Keywords': keywords,
    'Tweet': tweet,
    'Facebook / Other social media post': facebook,
    'Notes': notes
  };
  const {
    body,
    rowOrder
  } = getBodyRowOrder(rawBody);
  const userEmail = email;

  postToNodemailer(submissionType, body, rowOrder, userEmail);
}

export default socialMediaToNodemailer;