import axios from "axios";

const promoPostToServer = ({
  amazonURL,
  alertMe,
  date,
  notes,
  email,
  email2
}) => {
  axios
    .post("/api/submitter", {
      toWiseFox: {
        subject: 'Alert Request',
        text: `ALERT REQUEST

              Amazon URL: ${amazonURL}
              Alert user: 
              ${alertMe['On the date'] ? ' - On the date' : ''}
              ${alertMe['One week before'] ? ' - One week before' : ''}
              ${alertMe['Two weeks before'] ? ' - Two weeks before' : ''}              ${alertMe['On the date'] && '- On the date'}
              Notes: ${notes}
              Date: ${date.format("MMMM Do YYYY")}
              Email to notify: ${email}
              ${email2 && `Secondary email to notify: ${email2}`}
            `,
        html: `
              <h3>Alert Request</h3>
              <p>Amazon URL: ${amazonURL}</p>
              <p>Alert user:</p>
              <ul>
                ${alertMe['On the date'] ? '<li>On the date</li>' : ''}
                ${alertMe['One week before'] ? '<li>One week before</li>' : ''}
                ${alertMe['Two weeks before'] ? '<li>Two weeks before</li>' : ''}
              </ul>
              <p>Notes: ${notes}</p>
              <p>Date: ${date.format("MMMM Do YYYY")}</p>
              <p>Email: ${email}</p>
              ${email2 && `<p>Secondary email to notify: ${email2}</p>`}              
            `
      },
      toUser: {
        subject: 'Your Alert Request was received!',
        text: `Thank you for sending your alert request!
              Please let us know if any of the below information is incorrect.
              We will send you an email when the promotion submission is finished.

              -------------------------------------

              Amazon URL: ${amazonURL}
              Alert Me: 
                ${alertMe['On the date'] ? ' - On the date' : ''}
                ${alertMe['One week before'] ? ' - One week before' : ''}
                ${alertMe['Two weeks before'] ? ' - Two weeks before' : ''}
              Notes: ${notes}
              Date: ${date.format("MMMM Do YYYY")}
              Email to notify: ${email}
              ${email2 && `Secondary email to notify: ${email2}`}

              -------------------------------------


              Thanks again!
              --Wise Fox
            `,
        html: `<p>Thank you for sending your promotion submission request! <br />
              Please let us know if any of the below information is incorrect. <br />
              We will send you an email when the promotion submission is finished.</p>
              <hr />          
              <blockquote>
                <p>Amazon URL: ${amazonURL}</p>
                <p>Alert user:</p>
                <ul>
                  ${alertMe['On the date'] ? '<li>On the date</li>' : ''}
                  ${alertMe['One week before'] ? '<li>One week before</li>' : ''}
                  ${alertMe['Two weeks before'] ? '<li>Two weeks before</li>' : ''}
                </ul>
                <p>Notes: ${notes}</p>
                <p>Date: ${date.format("MMMM Do YYYY")}</p>
                <p>Email: ${email}</p>
                ${email2 && `<p>Secondary email to notify: ${email2}</p>`}     
              </blockquote>
              <hr />
              <p>Thanks again!</p>
              <p>--Wise Fox</p>
            `
      },
      userEmail: `${email}`
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default promoPostToServer;