import prepareEmailAlert from '../../../../../containers/AlertsSubmitter/alertToNodemailer/prepareEmailAlert/prepareEmailAlert';
import alerts from '../../../fixtures/alerts';

test('should convert min alert into correct object', () => {
  const prepared = prepareEmailAlert(alerts.min);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  expect(submissionType).toBe('Alert');
  expect(emailBody).toEqual({
    'Alert Me ': 'One week before',
    'Date': 'December 28th 2050',
    'Notes/Other Info': 'Min notes.',
    'Email to notify': 'example@example.email',
  });
  expect(rowOrder).toEqual([
    'Alert Me ',
    'Date',
    'Notes/Other Info',
    'Email to notify',
  ]);
  expect(userEmail).toBe('example@example.email');
});

test('should convert max alert into correct object', () => {
  const prepared = prepareEmailAlert(alerts.max);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  expect(submissionType).toBe('Alert');
  expect(emailBody).toEqual({
    'Amazon URL': 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    'Alert Me': 'On the date',
    'Alert Me ': 'One week before',
    'Alert Me  ': 'Two weeks before',
    'Date': 'December 28th 2050',
    'Notes/Other Info': 'These are some notes.',
    'Email to notify': 'example@example.email',
    'Secondary email': 'secondexample@example.email'
  });
  expect(rowOrder).toEqual([
    'Amazon URL',
    'Alert Me',
    'Alert Me ',
    'Alert Me  ',
    'Date',
    'Notes/Other Info',
    'Email to notify',
    'Secondary email'
  ]);
  expect(userEmail).toBe('example@example.email');
});