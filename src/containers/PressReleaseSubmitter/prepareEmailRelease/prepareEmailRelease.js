import getBodyRowOrder from '../../submitterUtils/getBodyRowOrder';

const prepareEmailRelease = ({
  amazonUrl,
  fictionOrNonFiction,
  genre,
  subGenre,
  email,
  price,
  promoType,
  startDate,
  endDate,
  website,
  keywords,
  releaseText
}) => {
  const submissionType = 'Press Release';
  let rawBody = {
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': fictionOrNonFiction,
    'Genre': genre,
    'Sub-genre': subGenre,
    'Email': email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Start Date': startDate && startDate.format("MMMM Do YYYY"),
    'End Date': endDate && endDate.format("MMMM Do YYYY"),
    'Website': website,
    'Keywords': keywords,
    'Press Release': releaseText
  };
  const {
    emailBody,
    rowOrder
  } = getBodyRowOrder(rawBody);
  const userEmail = email;

  return {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  }
}

export default prepareEmailRelease;