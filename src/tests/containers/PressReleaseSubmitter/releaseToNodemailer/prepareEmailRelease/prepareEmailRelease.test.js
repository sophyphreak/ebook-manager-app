// import prepareEmailRelease from '../../../../../containers/PressReleaseSubmitter/releaseToNodemailer/prepareEmailRelease/prepareEmailRelease';
// import releases from '../../../fixtures/releases';

// test('should convert min release into correct object', () => {
//   const prepared = prepareEmailAlert(releases.min);
//   const {
//     submissionType,
//     emailBody,
//     rowOrder,
//     userEmail
//   } = prepared;
//   const {
//     amazonUrl,
//     fictionOrNonFiction,
//     email,
//     price,
//     promoType,
//     releaseText
//   } = releases.min;
//   expect(submissionType).toBe('Press Release');
//   expect(emailBody).toEqual({
//     'Amazon URL': amazonUrl,
//     'Fiction or Nonfiction?': fictionOrNonFiction,
//     'Email': email,
//     'Regular Price': price,
//     'Promo Type': promoType,
//     'Press Release': releaseText
//   });
//   expect(rowOrder).toEqual([
//     'Amazon URL',
//     'Fiction or Nonfiction?',
//     'Email',
//     'Regular Price',
//     'Promo Type',
//     'Press Release'
//   ]);
//   expect(userEmail).toBe(email);
// });

// test('should convert max release into correct object', () => {
//   const prepared = prepareEmailAlert(release.max);
//   const {
//     submissionType,
//     emailBody,
//     rowOrder,
//     userEmail
//   } = prepared;
//   expect(submissionType).toBe('Alert');
//   expect(emailBody).toEqual({
//     'Amazon URL': 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
//     'Alert Me': 'On the date',
//     'Alert Me ': 'One week before',
//     'Alert Me  ': 'Two weeks before',
//     'Date': 'December 28th 2050',
//     'Notes/Other Info': 'These are some notes.',
//     'Email to notify': 'example@example.email',
//     'Secondary email': 'secondexample@example.email'
//   });
//   expect(rowOrder).toEqual([
//     'Amazon URL',
//     'Alert Me',
//     'Alert Me ',
//     'Alert Me  ',
//     'Date',
//     'Notes/Other Info',
//     'Email to notify',
//     'Secondary email'
//   ]);
//   expect(userEmail).toBe('example@example.email');
// });