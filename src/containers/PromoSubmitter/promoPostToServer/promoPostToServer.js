import axios from "axios";

const promoPostToServer = ({
  title,
  asin,
  amazonURL,
  isFiction,
  genre,
  subGenre,
  firstName,
  lastName,
  email,
  description,
  authorBio,
  promoType,
  promoSites,
  startDate,
  endDate
}) => {
  axios
    .post("/api/promo_submitter", {
      text: `PROMO SUBMITTER REQUEST
  
            Title: ${title}
            ASIN: ${asin}
            Amazon URL: ${amazonURL}
            Regular Price ($): ${amazonURL}
            Fiction or Nonfiction?: ${isFiction}
            Genre: ${genre}
            Sub-Genre: ${subGenre}
            Author First Name: ${firstName}
            Author Last Name: ${lastName}
            Email: ${email}
            Description: ${description}
            Author Biography: ${authorBio}
            Promo Type: ${promoType}
            Promo Sites: ${promoSites}
            Start Date: ${startDate.format("MMMM Do YYYY")}
            End Date: ${endDate.format("MMMM Do YYYY")}
          `,
      html: `
            <h3>Promo Submitter Request</h3>
            <p>Title: ${title}</p>
            <p>ASIN: ${asin}</p>
            <p>Amazon URL: ${amazonURL}</p>
            <p>Regular Price ($): ${price}</p>
            <p>Fiction or Nonfiction?: ${isFiction}</p>
            <p>Genre: ${genre}</p>
            <p>Sub-Genre: ${subGenre}</p>
            <p>Author First Name: ${firstName}</p>
            <p>Author Last Name: ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Description: ${description}</p>
            <p>Author Biography: ${authorBio}</p>
            <p>Promo Type: ${promoType}</p>
            <p>Promo Sites: ${promoSites}</p>
            <p>Start Date: ${startDate.format("MMMM Do YYYY")}</p>
            <p>End Date: ${endDate.format("MMMM Do YYYY")}</p>
          `
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default promoPostToServer;