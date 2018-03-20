import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import PromoComponent from '../../components/PromoSubmitter/PromoComponent';

export default class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "PromoPage1",
      error: "",

      // PromoPage1
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
      
      // PromoPage2
      price: "",
      promoType: "",
      startDate: moment(),
      endDate: moment(),
      calendarFocus: null,
      
      // PromoPage3
      description: "",
      authorBio: ""
    };

    // PromoPage1
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onAsinChange = this.onAsinChange.bind(this);
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onIsFictionChange = this.onIsFictionChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitPromoPage1 = this.onSubmitPromoPage1.bind(this);
    
    // PromoPage2
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onPromoTypeChange = this.onPromoTypeChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitPromoPage2 = this.onSubmitPromoPage2.bind(this);
    
    // PromoPage3
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAuthorBioChange = this.onAuthorBioChange.bind(this);
    this.onSubmitPromoPage3 = this.onSubmitPromoPage3.bind(this);

    this.onBack = this.onBack.bind(this);
  }

  // PromoPage1

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

  onSubmitPromoPage1(e) {
    e.preventDefault();
    const {
      title,
      asin,
      amazonURL,
      isFiction,
      firstName,
      lastName,
      email
    } = this.state;
    if (
      !title ||
      !asin ||
      !amazonURL ||
      !isFiction ||
      !firstName ||
      !lastName ||
      !email
    ) {
      this.setState(() => ({ error: "Please fill in all required fields." }));
    } else if (
      isFiction === 'Fiction' && !genre
    ) {
      this.setState(() => ({ error: "Please select a genre." }));      
    } else if (
      !asin.match(/^[0-9A-Z]{10}$/)
    ) {
      this.setState(() => ({ error: "Please provide a valid ASIN." }));
    } else if (
      !amazonURL.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)
    ) {
      this.setState(() => ({ error: "Please provide a valid Amazon url." }));
    } else if (
      !email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
    ) {
      this.setState(() => ({ error: "Please provide a valid email address." }));
    } else {
      console.log(this.state);

      const error = "";
      this.setState(() => ({ error }));

      const currentPage = "PromoPage2";
      this.setState(() => ({ currentPage }));
    }
  }

  // PromoPage2

  onPriceChange(e) {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
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

  onSubmitPromoPage2(e) {
    e.preventDefault();
    const {
      price,
      promoType,
      startDate,
      endDate
    } = this.state;
    if (
      !price || 
      !promoType ||
      !startDate ||
      !endDate
    ) {
      this.setState(() => ({ error: "Please fill in all required fields." }));
    } else {
      console.log(this.state);

      const error = "";
      this.setState(() => ({ error }));

      const currentPage = "PromoPage3";
      this.setState(() => ({ currentPage }));
    }
  }

  // PromoPage3

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onAuthorBioChange(e) {
    const authorBio = e.target.value;
    this.setState(() => ({ authorBio }));
  }

  onSubmitPromoPage3(e) {
    e.preventDefault();
    const {
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
    } = this.state;
    if (
      !description || 
      !authorBio
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
    }
  }

  onBack(e) {
    if (this.state.currentPage === "PromoPage2") {
      const currentPage = "PromoPage1";
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === "PromoPage3") {
      const currentPage = "PromoPage2";
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
      price,
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

        // PromoPage1
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
        
        // PromoPage2
        price={price}
        promoType={promoType}
        startDate={startDate}
        endDate={endDate}
        calendarFocus={calendarFocus}
        
        // PromoPage3
        description={description}
        authorBio={authorBio}

        // Methods
        onBack={this.onBack}

        // PromoPage1
        onTitleChange={this.onTitleChange}
        onAsinChange={this.onAsinChange}
        onAmazonURLChange={this.onAmazonURLChange}
        onIsFictionChange={this.onIsFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onEmailChange={this.onEmailChange}
        onSubmitPromoPage1={this.onSubmitPromoPage1}
        
        // PromoPage2
        onPriceChange={this.onPriceChange}
        onPromoTypeChange={this.onPromoTypeChange}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        onSubmitPromoPage2={this.onSubmitPromoPage2}
        
        // PromoPage3
        onDescriptionChange={this.onDescriptionChange}
        onAuthorBioChange={this.onAuthorBioChange}
        onSubmitPromoPage3={this.onSubmitPromoPage3}
        />
    );
  }
}
