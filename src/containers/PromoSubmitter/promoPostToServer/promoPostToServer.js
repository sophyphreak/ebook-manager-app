import axios from "axios";

const promoPostToServer = ({
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
  axios
    .post("/api/submitter", {
      toWiseFox: {
        subject: 'Promo Submission',
        text: `PROMO SUBMITTER REQUEST
    
              Title: ${title}
              ASIN: ${asin}
              Amazon URL: ${amazonURL}
              Fiction or Nonfiction?: ${fictionOrNonFiction}
              Genre: ${genre || 'None'}
              Sub-Genre: ${subGenre || 'None'}
              Author First Name: ${firstName}
              Author Last Name: ${lastName}
              Email: ${email}
              Regular Price ($): ${price}
              Promo Type: ${promoType}
              Start Date: ${startDate.format("MMMM Do YYYY")}
              End Date: ${endDate.format("MMMM Do YYYY")}
              Description: ${description}
              Author Biography: ${authorBio}
            `,
        html: `
              <h3>Promo Submitter Request</h3>
              <p>Title: ${title}</p>
              <p>ASIN: ${asin}</p>
              <p>Amazon URL: ${amazonURL}</p>
              <p>Fiction or Nonfiction?: ${fictionOrNonFiction}</p>
              <p>Genre: ${genre || 'None'}</p>
              <p>Sub-Genre: ${subGenre || 'None'}</p>
              <p>Author First Name: ${firstName}</p>
              <p>Author Last Name: ${lastName}</p>
              <p>Email: ${email}</p>
              <p>Regular Price ($): ${price}</p>
              <p>Promo Type: ${promoType}</p>
              <p>Start Date: ${startDate.format("MMMM Do YYYY")}</p>
              <p>End Date: ${endDate.format("MMMM Do YYYY")}</p>
              <p>Description: ${description}</p>
              <p>Author Biography: ${authorBio}</p>
            `
      },
      toUser: {
        subject: 'Your Promo Request was received!',
        text: `Thank you for sending your promotion submission request!
              Please let us know if any of the below information is incorrect.
              We will send you an email when the promotion submission is finished.

              Title: ${title}
              ASIN: ${asin}
              Amazon URL: ${amazonURL}
              Regular Price ($): ${amazonURL}
              Fiction or Nonfiction?: ${fictionOrNonFiction}
              Genre: ${genre || 'None'}
              Sub-Genre: ${subGenre || 'None'}
              Author First Name: ${firstName}
              Author Last Name: ${lastName}
              Email: ${email}
              Regular Price: ${price}
              Promo Type: ${promoType}
              Start Date: ${startDate.format("MMMM Do YYYY")}
              End Date: ${endDate.format("MMMM Do YYYY")}
              Description: ${description}
              Author Biography: ${authorBio}

              Thanks again!
              --Wise Fox
            `,
        html: `<p>Thank you for sending your promotion submission request!</p>
              <p>Please let us know if any of the below information is incorrect.</p>
              <p>We will send you an email when the promotion submission is finished.</p>
              <hr />
              <blockquote>
                <p>Title: ${title}</p>
                <p>ASIN: ${asin}</p>
                <p>Amazon URL: ${amazonURL}</p>
                <p>Regular Price ($): ${price}</p>
                <p>Fiction or Nonfiction?: ${fictionOrNonFiction}</p>
                <p>Genre: ${genre || 'None'}</p>
                <p>Sub-Genre: ${subGenre || 'None'}</p>
                <p>Author First Name: ${firstName}</p>
                <p>Author Last Name: ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Promo Type: ${promoType}</p>
                <p>Start Date: ${startDate.format("MMMM Do YYYY")}</p>
                <p>End Date: ${endDate.format("MMMM Do YYYY")}</p>
                <p>Description: ${description}</p>
                <p>Author Biography: ${authorBio}</p>
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