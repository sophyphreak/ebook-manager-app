import axios from "axios";
import { html as beautify } from 'js-beautify';
import htmlToText from 'html-to-text';

const postToNodemailer = (
  submissionType, 
  bodyObject, 
  rowLabelArray, 
  userEmail
) => {
  let coreHtml = '<table>';
  Object.keys(bodyObject).map((rowLabel) => {
    coreHtml += `<tr><td>${rowLabel}</td><td>${bodyObject[rowLabel]}</td></tr>`;
  });
  coreHtml += '</table>';

  const wiseFoxSubject = submissionType
  let wiseFoxHtml = `<h3>${submissionType} Request</h3>` + coreHtml;
  const wiseFoxText = htmlToText.fromString(wiseFoxHtml, { wordwrap: 130 });
  wiseFoxHtml = beautify(wiseFoxHtml);
  
  const userSubject = `Your ${submissionType} Request Was Sent!`
  let userHtml = `
    <p>Thank you for sending your promotion submission request!</p>
    <p>Please let us know if any of the below information is incorrect.</p>
    <p>We will send you an email when the promotion submission is finished.</p><hr />`;
  userHtml += coreHtml;
  userHtml += '<hr /><p>Thanks again!</p ><p>--Wise Fox</p>'
  const userText = htmlToText.fromString(userText, { wordwrap: 130 });
  userHtml = beautify(userHtml);

  axios
    .post("/api/submitter", {
      toWiseFox: {
        subject: wiseFoxSubject,
        text: wiseFoxText,
        html: wiseFoxHtml
      },
      toUser: {
        subject: userSubject,
        text: userText,
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