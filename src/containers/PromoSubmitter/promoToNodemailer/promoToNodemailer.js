import getFilteredBodyAndOrder from '../../submitterUtils/getFilteredBodyAndOrder';
import postToNodemailer from '../../submitterUtils/postToNodemailer';

const promoToNodemailer = ({
  amazonURL,
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
    'Amazon URL': amazonURL,
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
    bodyObject,
    rowLabelOrder
  } = getFilteredBodyAndOrder(rawBody);
  const userEmail = email;

  postToNodemailer(submissionType, bodyObject, rowLabelOrder, userEmail);
};

export default promoToNodemailer;