import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import PromoComponent from '../../components/PromoSubmitter/PromoComponent';

export default class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "BookDetailsOne",
      error: "",
      
      // // BookDetailsOne
      // title:        'Zhuangzi: The Essential Writings: With Selections from Traditional Commentaries (Hackett Classics)',
      // ASIN:         'B003ZDNYWA',
      // amazonURL:    'https://www.amazon.com/Zhuangzi-Essential-Selections-Traditional-Commentaries-ebook/dp/B003ZDNYWA/ref=pd_sim_351_2?_encoding=UTF8&psc=1&refRID=5J3S0PMW5KKDQHFM21NR',
      // regPrice:     '$10.09',
      // isFiction:    'Nonfiction',
      // genre:        'Philosophy',
      // subGenre:     'Eastern Philosophy',
      // firstName:    'Brook',
      // lastName:     'Ziporyn',
      // email:        'fake-email@gmail.com',

      // // BookDetailsTwo
      // description:  'Ideal for students and scholars alike, this edition of Zhuangzi (Chuang Tzu) includes the complete Inner Chapters, extensive selections from the Outer and Miscellaneous Chapters, and judicious selections from two thousand years of traditional Chinese commentaries, which provide the reader access to the text as well as to its reception and interpretation. A glossary, brief biographies of the commentators, a bibliography, and an index are also included.',
      // authorBio:    'Brook Ziporyn is Associate Professor of Religion and Philosophy, Northwestern University.',
      // // cover:        '',

      // // SiteSelection
      // promoType: '99 cents',

      // // DateSelection
      // startDate:    moment('2018-3-1'),
      // endDate:      moment('2018-3-5'),

      // BookDetailsOne
      title: "",
      asin: "",
      amazonURL: "",
      isFiction: "",
      genre: "",
      isGenreDisabled: true,
      subGenre: "",
      firstName: "",
      lastName: "",
      email: "",
      
      // BookDetailsTwo
      regPrice: "",
      promoType: "",
      startDate: moment(),
      endDate: moment(),
      calendarFocus: null,
      
      // BookDetailsThree
      description: "",
      authorBio: ""
    };

    // BookDetailsOne
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onAsinChange = this.onAsinChange.bind(this);
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onIsFictionChange = this.onIsFictionChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitBookDetailsOne = this.onSubmitBookDetailsOne.bind(this);
    
    // BookDetailsTwo
    this.onRegPriceChange = this.onRegPriceChange.bind(this);
    this.onPromoTypeChange = this.onPromoTypeChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitBookDetailsTwo = this.onSubmitBookDetailsTwo.bind(this);
    
    // BookDetailsThree
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAuthorBioChange = this.onAuthorBioChange.bind(this);
    this.onSubmitBookDetailsThree = this.onSubmitBookDetailsThree.bind(this);

    this.onClickBack = this.onClickBack.bind(this);
  }

  // BookDetailsOne

  onTitleChange(e) {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }

  onAsinChange(e) {
    const asin = e.target.value.toUpperCase();
    if (asin.match(/^[0-9A-Z]{0,10}$/)) {
      this.setState(() => ({ asin }));
    }
  }

  onAmazonURLChange(e) {
    const amazonURL = e.target.value;
    this.setState(() => ({ amazonURL }));
  }

  onIsFictionChange(e) {
    const isFiction = e.target.value;
    if (isFiction === 'Fiction') {
      const isGenreDisabled = false;
      this.setState(() => ({ isGenreDisabled }));
    } else {
      const isGenreDisabled = true;
      this.setState(() => ({ isGenreDisabled }));
    };
    this.setState(() => ({ isFiction }));
  }

  onGenreChange(e) {
    const genre = e.target.value;
    this.setState(() => ({ genre }));
  }

  onSubGenreChange(e) {
    const subGenre = e.target.value;
    this.setState(() => ({ subGenre }));
  }

  onFirstNameChange(e) {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  }

  onLastNameChange(e) {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onSubmitBookDetailsOne(e) {
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.asin ||
      !this.state.amazonURL ||
      !this.state.isFiction ||
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email
    ) {
      this.setState(() => ({ error: "Please fill in all required fields." }));
    } else if (!this.state.asin.match(/^[0-9A-Z]{10}$/)) {
      this.setState(() => ({ error: "Please provide a valid ASIN." }));
    } else if (
      !this.state.amazonURL.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)
    ) {
      this.setState(() => ({ error: "Please provide a valid Amazon url." }));
    } else if (
      !this.state.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
    ) {
      this.setState(() => ({ error: "Please provide a valid email address." }));
    } else {
      console.log(this.state);

      const error = "";
      this.setState(() => ({ error }));

      const currentPage = "BookDetailsTwo";
      this.setState(() => ({ currentPage }));
    }
  }

  // BookDetailsTwo

  onRegPriceChange(e) {
    const regPrice = e.target.value;
    if (!regPrice || regPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ regPrice }));
    }
  }

  onPromoTypeChange(e) {
    const promoType = e.target.value;
    this.setState(() => ({ promoType }));
  }

  onDatesChange({ startDate, endDate }) {
    this.setState(() => ({ startDate, endDate }));
  }

  onFocusChange(calendarFocus) {
    this.setState(() => ({ calendarFocus }));
  }

  onSubmitBookDetailsTwo(e) {
    e.preventDefault();
    if (
      !this.state.regPrice || 
      !this.state.promoType ||
      !this.state.startDate ||
      !this.state.endDate
    ) {
      this.setState(() => ({ error: "Please fill in all required fields." }));
    } else {
      console.log(this.state);

      const error = "";
      this.setState(() => ({ error }));

      const currentPage = "BookDetailsThree";
      this.setState(() => ({ currentPage }));
    }
  }

  // BookDetailsThree

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onAuthorBioChange(e) {
    const authorBio = e.target.value;
    this.setState(() => ({ authorBio }));
  }

  onSubmitBookDetailsThree(e) {
    e.preventDefault();
    if (
      !this.state.description || 
      !this.state.authorBio
    ) {
      this.setState(() => ({ error: "Please fill in all required fields." }));
    } else {

      console.log(this.state);

      const error = "";
      this.setState(() => ({ error }));

      const currentPage = "SubmissionSuccess";
      this.setState(() => ({ currentPage }));

      // Currently constructing POST call to server in order to send an email
      axios
        .post("/api/promo_submitter", {
          text: `PROMO SUBMITTER REQUEST

          Title: ${this.state.title}
          ASIN: ${this.state.asin}
          Amazon URL: ${this.state.amazonURL}
          Regular Price ($): ${this.state.amazonURL}
          Fiction or Nonfiction?: ${this.state.isFiction}
          Genre: ${this.state.genre}
          Sub-Genre: ${this.state.subGenre}
          Author First Name: ${this.state.firstName}
          Author Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Description: ${this.state.description}
          Author Biography: ${this.state.authorBio}
          Promo Type: ${this.state.promoType}
          Promo Sites: ${this.state.promoSites}
          Start Date: ${this.state.startDate.format("MMMM Do YYYY")}
          End Date: ${this.state.endDate.format("MMMM Do YYYY")}
        `,
          html: `
          <h3>Promo Submitter Request</h3>
          <p>Title: ${this.state.title}</p>
          <p>ASIN: ${this.state.asin}</p>
          <p>Amazon URL: ${this.state.amazonURL}</p>
          <p>Regular Price ($): ${this.state.regPrice}</p>
          <p>Fiction or Nonfiction?: ${this.state.isFiction}</p>
          <p>Genre: ${this.state.genre}</p>
          <p>Sub-Genre: ${this.state.subGenre}</p>
          <p>Author First Name: ${this.state.firstName}</p>
          <p>Author Last Name: ${this.state.lastName}</p>
          <p>Email: ${this.state.email}</p>
          <p>Description: ${this.state.description}</p>
          <p>Author Biography: ${this.state.authorBio}</p>
          <p>Promo Type: ${this.state.promoType}</p>
          <p>Promo Sites: ${this.state.promoSites}</p>
          <p>Start Date: ${this.state.startDate.format("MMMM Do YYYY")}</p>
          <p>End Date: ${this.state.endDate.format("MMMM Do YYYY")}</p>
        `
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  onClickBack(e) {
    if (this.state.currentPage === "BookDetailsTwo") {
      const currentPage = "BookDetailsOne";
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === "BookDetailsThree") {
      const currentPage = "BookDetailsTwo";
      this.setState(() => ({ currentPage }));
    }
  }

  render() {
    const {
      currentPage,
      error,
      title,
      asin,
      amazonURL,
      regPrice,
      isFiction,
      genre,
      isGenreDisabled,
      subGenre,
      firstName,
      lastName,
      email,
      description,
      authorBio,
      promoType,
      startDate,
      endDate,
      calendarFocus
    } = this.state;
    return (
      <PromoComponent 
        // State
        currentPage={currentPage}
        error={error}

        // BookDetailsOne
        title={title}
        asin={asin}
        amazonURL={amazonURL}
        isFiction={isFiction}
        genre={genre}
        isGenreDisabled={isGenreDisabled}
        subGenre={subGenre}
        firstName={firstName}
        lastName={lastName}
        email={email}
        
        // BookDetailsTwo
        regPrice={regPrice}
        promoType={promoType}
        startDate={startDate}
        endDate={endDate}
        calendarFocus={calendarFocus}
        
        // BookDetailsThree
        description={description}
        authorBio={authorBio}

        // Methods
        onClickBack={this.onClickBack}

        // BookDetailsOne
        onTitleChange={this.onTitleChange}
        onAsinChange={this.onAsinChange}
        onAmazonURLChange={this.onAmazonURLChange}
        onIsFictionChange={this.onIsFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onEmailChange={this.onEmailChange}
        onSubmitBookDetailsOne={this.onSubmitBookDetailsOne}
        
        // BookDetailsTwo
        onRegPriceChange={this.onRegPriceChange}
        onPromoTypeChange={this.onPromoTypeChange}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        onSubmitBookDetailsTwo={this.onSubmitBookDetailsTwo}
        
        // BookDetailsThree
        onDescriptionChange={this.onDescriptionChange}
        onAuthorBioChange={this.onAuthorBioChange}
        onSubmitBookDetailsThree={this.onSubmitBookDetailsThree}
        />
    );
  }
}
