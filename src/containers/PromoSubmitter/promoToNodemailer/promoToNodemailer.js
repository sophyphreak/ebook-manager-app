import getBodyRowOrder from '../../submitterUtils/getBodyRowOrder';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const promoToNodemailer = ({
  amazonUrl,
  fictionOrNonFiction,
  genre,
  subGenre,
  email,
  price,
  promoType,
  startDate,
  endDate,
  description,
  authorBio
}) => {
  const submissionType = 'Book Promotion';
  let rawBody = {
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': fictionOrNonFiction,
    'Genre': genre,
    'Sub-genre': subGenre,
    'Email': email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Start Date': startDate.format("MMMM Do YYYY"),
    'End Date': endDate.format("MMMM Do YYYY"),
    'Description': description,
    'Author Biography': authorBio
  };
  const {
    body,
    rowOrder
  } = getBodyRowOrder(rawBody);
  const userEmail = email;

  postToNodemailer(submissionType, body, rowOrder, userEmail);
};

export default promoToNodemailer;