import prepareEmailAlert from '../../../../../containers/AlertsSubmitter/sendAlertToNodemailer/prepareEmailAlert/prepareEmailAlert';
import alerts from '../../../fixtures/alerts';

test('should convert min alert into correct object', () => {
  const prepared = prepareEmailAlert(alerts.min);
  const {
    submissionType,
    emailBody,
    rowOrder,
    userEmail
  } = prepared;
  const {
    alertMe,
    date,
    notes,
    email
  } = alerts.min;
  expect(submissionType).toBe('Alert');
  expect(emailBody).toEqual({
    'Alert Me ': alertMe.oneWeekBefore.text,
    'Date': date.format("MMMM Do YYYY"),
    'Notes/Other Info': notes,
    'Email to notify': email,
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
  const {
    amazonUrl,
    alertMe,
    date,
    notes,
    email,
    email2
  } = alerts.max;
  expect(submissionType).toBe('Alert');
  expect(emailBody).toEqual({
    'Amazon URL': amazonUrl,
    'Alert Me': alertMe.onTheDate.text,
    'Alert Me ': alertMe.oneWeekBefore.text,
    'Alert Me  ': alertMe.twoWeeksBefore.text,
    'Date': date.format("MMMM Do YYYY"),
    'Notes/Other Info': notes,
    'Email to notify': email,
    'Secondary email': email2
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