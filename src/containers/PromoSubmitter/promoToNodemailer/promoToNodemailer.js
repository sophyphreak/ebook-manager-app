import getFilteredBodyAndOrder from '../../submitterUtils/getFilteredBodyAndOrder';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const promoToNodemailer = ({
  title,
  asin,
  amazonURL,
  fictionOrNonFiction,
  genre,
  subGenre,
  firstName,
  lastName,
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
    'Title': title,
    'ASIN': asin,
    'Amazon URL': amazonURL,
    'Fiction or Nonfiction?': fictionOrNonFiction,
    'Genre': genre,
    'Sub-genre': subGenre,
    'Author First Name': firstName,
    'Author Last Name': lastName,
    'Email': email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Start Date': startDate.format("MMMM Do YYYY"),
    'End Date': endDate.format("MMMM Do YYYY"),
    'Description': description,
    'Author Biography': authorBio
  };
  const {
    bodyObject,
    rowLabelOrder
  } = getFilteredBodyAndOrder(rawBody);
  const userEmail = email;

  postToNodemailer(submissionType, bodyObject, rowLabelOrder, userEmail);
};

export default promoToNodemailer;