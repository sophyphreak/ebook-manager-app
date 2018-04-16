import getBodyRowOrder from '../../../submitterUtils/getBodyRowOrder';

const prepareEmailPromo = ({
  amazonUrl,
  nonFictionOrFiction,
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
    'Fiction or Nonfiction?': nonFictionOrFiction,
    Genre: genre,
    'Sub-genre': subGenre,
    Email: email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Start Date': startDate.format('MMMM Do YYYY'),
    'End Date': endDate.format('MMMM Do YYYY'),
    Description: description,
    'Author Biography': authorBio
  };
  const { emailBody, rowOrder } = getBodyRowOrder(rawBody);
  const userEmail = email;

  return {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  };
};

export default prepareEmailPromo;
