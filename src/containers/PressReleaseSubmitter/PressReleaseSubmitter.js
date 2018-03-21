import React, { Component } from "react";
import moment from "moment";

import PressReleaseComponent from '../../components/PressReleaseComponent/PressReleaseComponent';
import pressReleasePostToServer from './pressReleasePostToServer/pressRelasePostToServer';

export default class PressReleaseSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "PressReleasePage1",
      error: "",

      // PressReleasePage1
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

      // PressReleasePage2
      price: "",
      promoType: "",
      startDate: moment(),
      endDate: moment(),
      calendarFocus: null,

      // PressReleasePage3
      description: "",
      authorBio: ""
    };

    // PressReleasePage1
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onAsinChange = this.onAsinChange.bind(this);
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onIsFictionChange = this.onIsFictionChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitPressReleasePage1 = this.onSubmitPressReleasePage1.bind(this);

    // PressReleasePage2
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onPromoTypeChange = this.onPromoTypeChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitPressReleasePage2 = this.onSubmitPressReleasePage2.bind(this);

    // PressReleasePage3
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAuthorBioChange = this.onAuthorBioChange.bind(this);
    this.onSubmitPressReleasePage3 = this.onSubmitPressReleasePage3.bind(this);

    this.onBack = this.onBack.bind(this);
  }

  // PressReleasePage1

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

  onSubmitPressReleasePage1(e) {
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

      const currentPage = "PressReleasePage2";
      this.setState(() => ({ currentPage }));
    }
  }

  // PressReleasePage2

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

  onSubmitPressReleasePage2(e) {
    e.preventDefault();
    const { price, promoType, startDate, endDate } = this.state;
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

      const currentPage = "PressReleasePage3";
      this.setState(() => ({ currentPage }));
    }
  }

  // PressReleasePage3

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onAuthorBioChange(e) {
    const authorBio = e.target.value;
    this.setState(() => ({ authorBio }));
  }

  onSubmitPressReleasePage3(e) {
    e.preventDefault();
    const { description, authorBio } = this.state;
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

      pressReleasePostToServer(this.state);
    }
  }

  onBack(e) {
    if (this.state.currentPage === "PressReleasePage2") {
      const currentPage = "PressReleasePage1";
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === "PressReleasePage3") {
      const currentPage = "PressReleasePage2";
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
      <PressReleaseComponent
        // State
        currentPage={currentPage}
        error={error}

        // PressReleasePage1
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

        // PressReleasePage2
        price={price}
        promoType={promoType}
        startDate={startDate}
        endDate={endDate}
        calendarFocus={calendarFocus}

        // PressReleasePage3
        description={description}
        authorBio={authorBio}

        // Methods
        onBack={this.onBack}

        // PressReleasePage1
        onTitleChange={this.onTitleChange}
        onAsinChange={this.onAsinChange}
        onAmazonURLChange={this.onAmazonURLChange}
        onIsFictionChange={this.onIsFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onEmailChange={this.onEmailChange}
        onSubmitPressReleasePage1={this.onSubmitPressReleasePage1}

        // PressReleasePage2
        onPriceChange={this.onPriceChange}
        onPromoTypeChange={this.onPromoTypeChange}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        onSubmitPressReleasePage2={this.onSubmitPressReleasePage2}

        // PressReleasePage3
        onDescriptionChange={this.onDescriptionChange}
        onAuthorBioChange={this.onAuthorBioChange}
        onSubmitPressReleasePage3={this.onSubmitPressReleasePage3}
      />
    );
  }
}
