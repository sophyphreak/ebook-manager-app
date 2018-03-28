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
  const submissionType = 'Book Promotion'
  let bodyObject = {
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
  let rowLabelArray = Object.keys(bodyObject);
  rowLabelArray.filter((rowLabel) => {
    if (bodyObject[rowLabel]) {
      return true;
    };
    delete bodyObject[rowLabel];
  });
  const userEmail = email;
  postToNodemailer(submissionType, bodyObject, rowLabelArray, userEmail);
};

export default promoToNodemailer;