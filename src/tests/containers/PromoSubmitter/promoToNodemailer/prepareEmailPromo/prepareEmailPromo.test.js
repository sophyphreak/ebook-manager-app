import prepareEmailPromo from '../../../../../containers/PromoSubmitter/promoToNodemailer/prepareEmailPromo/prepareEmailPromo';
import promos from '../../../fixtures/promos';

test('should convert min promo into correct object', () => {
  const prepared = prepareEmailPromo(promos.min);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  const {
    amazonUrl,
    fictionOrNonFiction,
    email,
    price,
    promoType,
    startDate,
    endDate,
    description,
    authorBio
  } = promos.min;
  expect(submissionType).toBe('Book Promotion');
  expect(emailBody).toEqual({
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': fictionOrNonFiction,
    'Email': email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Start Date': startDate.format("MMMM Do YYYY"),
    'End Date': endDate.format("MMMM Do YYYY"),
    'Description': description,
    'Author Biography': authorBio
  });
  expect(rowOrder).toEqual([
    'Amazon URL',
    'Fiction or Nonfiction?',
    'Email',
    'Regular Price',
    'Promo Type',
    'Start Date',
    'End Date',
    'Description',
    'Author Biography'
  ]);
  expect(userEmail).toBe(email);
});

test('should convert max promo into correct object', () => {
  const prepared = prepareEmailPromo(promos.max);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  const {
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
  } = promos.max;
  expect(submissionType).toBe('Book Promotion');
  expect(emailBody).toEqual({
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
  });
  expect(rowOrder).toEqual([
    'Amazon URL',
    'Fiction or Nonfiction?',
    'Genre',
    'Sub-genre',
    'Email',
    'Regular Price',
    'Promo Type',
    'Start Date',
    'End Date',
    'Description',
    'Author Biography'
  ]);
  expect(userEmail).toBe('example@example.email');
});