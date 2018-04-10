import prepareEmailRelease from '../../../../../containers/PressReleaseSubmitter/releaseToNodemailer/prepareEmailRelease/prepareEmailRelease';
import releases from '../../../fixtures/releases';

test('should convert min release into correct object', () => {
  const prepared = prepareEmailRelease(releases.min);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  const {
    amazonUrl,
    nonFictionOrFiction,
    email,
    price,
    promoType,
    releaseText
  } = releases.min;
  expect(submissionType).toBe('Press Release');
  expect(emailBody).toEqual({
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': nonFictionOrFiction,
    'Email': email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Press Release': releaseText
  });
  expect(rowOrder).toEqual([
    'Amazon URL',
    'Fiction or Nonfiction?',
    'Email',
    'Regular Price',
    'Promo Type',
    'Press Release'
  ]);
  expect(userEmail).toBe(email);
});

test('should convert max release into correct object', () => {
  const prepared = prepareEmailRelease(releases.max);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  const {
    amazonUrl,
    nonFictionOrFiction,
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
  } = releases.max;
  expect(submissionType).toBe('Press Release');
  expect(emailBody).toEqual({
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': nonFictionOrFiction,
    'Genre': genre,
    'Sub-genre': subGenre,
    'Email': email,
    'Regular Price': price,
    'Promo Type': promoType,
    'Start Date': startDate.format("MMMM Do YYYY"),
    'End Date': endDate.format("MMMM Do YYYY"),
    'Website': website,
    'Keywords': keywords,
    'Press Release': releaseText
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
    'Website',
    'Keywords',
    'Press Release'
  ]);
  expect(userEmail).toBe('example@example.email');
});