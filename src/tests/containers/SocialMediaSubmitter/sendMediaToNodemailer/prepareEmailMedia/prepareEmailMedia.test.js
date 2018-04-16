import prepareEmailMedia from '../../../../../containers/SocialMediaSubmitter/sendMediaToNodemailer/prepareEmailMedia/prepareEmailMedia';
import media from '../../../fixtures/media';

test('should convert min media into correct object', () => {
  const prepared = prepareEmailMedia(media.min);
  const { submissionType, emailBody, rowOrder, userEmail } = prepared;
  const { amazonUrl, nonFictionOrFiction, email, regPrice } = media.min;
  expect(submissionType).toBe('Social Media Submission');
  expect(emailBody).toEqual({
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': nonFictionOrFiction,
    Email: email,
    'Regular Price': regPrice
  });
  expect(rowOrder).toEqual([
    'Amazon URL',
    'Fiction or Nonfiction?',
    'Email',
    'Regular Price'
  ]);
  expect(userEmail).toBe(email);
});

test('should convert max media into correct object', () => {
  const prepared = prepareEmailMedia(media.max);
  const { submissionType, emailBody, rowOrder, userEmail } = prepared;
  const {
    amazonUrl,
    nonFictionOrFiction,
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
  } = media.max;
  expect(submissionType).toBe('Social Media Submission');
  expect(emailBody).toEqual({
    'Amazon URL': amazonUrl,
    'Fiction or Nonfiction?': nonFictionOrFiction,
    Genre: genre,
    'Sub-genre': subGenre,
    Email: email,
    'Regular Price': regPrice,
    'Sale Price': salePrice,
    'Start Date': startDate.format('MMMM Do YYYY'),
    'End Date': endDate.format('MMMM Do YYYY'),
    Keywords: keywords,
    Tweet: tweet,
    'Facebook / Other social media post': facebook,
    Notes: notes
  });
  expect(rowOrder).toEqual([
    'Amazon URL',
    'Fiction or Nonfiction?',
    'Genre',
    'Sub-genre',
    'Email',
    'Regular Price',
    'Sale Price',
    'Start Date',
    'End Date',
    'Keywords',
    'Tweet',
    'Facebook / Other social media post',
    'Notes'
  ]);
  expect(userEmail).toBe('example@example.email');
});
