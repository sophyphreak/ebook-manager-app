import axios from 'axios';
import { html as beautify } from 'js-beautify';

const postToNodemailer = (submissionType, body, rowOrder, userEmail) => {
  let coreHtml = '<table>';
  Object.keys(body).forEach(row => {
    coreHtml += `<tr><td>${row}</td><td>${body[row]}</td></tr>`;
  });
  coreHtml += '</table>';

  const wiseFoxSubject = submissionType;
  let wiseFoxHtml = `<h3>${submissionType} Request</h3>` + coreHtml;
  wiseFoxHtml = beautify(wiseFoxHtml);

  const userSubject = `Your ${submissionType} Request Was Sent!`;
  let userHtml = `
    <p>Thank you for sending your promotion submission request!</p>
    <p>Please let us know if any of the below information is incorrect.</p>
    <p>We will send you an email when the promotion submission is finished.</p><hr />`;
  userHtml += coreHtml;
  userHtml += '<hr /><p>Thanks again!</p ><p>--Wise Fox</p>';
  userHtml = beautify(userHtml);

  axios
    .post('/api/submitter', {
      toWiseFox: {
        subject: wiseFoxSubject,
        html: wiseFoxHtml
      },
      toUser: {
        subject: userSubject,
        html: userHtml
      },
      userEmail: userEmail
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default postToNodemailer;
