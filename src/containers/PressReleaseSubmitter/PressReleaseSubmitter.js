import React, { Component } from "react";
import moment from "moment";

import PressReleaseComponent from '../../components/PressReleaseComponent/PressReleaseComponent';
import pressReleaseToNodemailer from './pressReleaseToNodemailer/pressReleaseToNodemailer';

export default class PressReleaseSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "PressReleasePage1",
      error: {
        message: "",
        amazonURL: "",
        fictionOrNonFiction: "",
        genre: "",
        email: "",
        price: "",
        promoType: "",
        datePicker: "",
        website: "",
        keywords: "",
        releaseText: ""
      },

      // PressReleasePage1
      amazonURL: "",
      fictionOrNonFiction: "",
      genre: "",
      subGenre: "",
      email: "",

      // PressReleasePage2
      price: "",
      promoType: "",
      startDate: moment(),
      endDate: moment(),
      calendarFocus: null,

      // PressReleasePage3
      website: "",
      keywords: "",
      releaseText: ""
    };

    // PressReleasePage1
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onFictionOrNonFictionChange = this.onFictionOrNonFictionChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitPressReleasePage1 = this.onSubmitPressReleasePage1.bind(this);

    // PressReleasePage2
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onPromoTypeChange = this.onPromoTypeChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitPressReleasePage2 = this.onSubmitPressReleasePage2.bind(this);

    // PressReleasePage3
    this.onWebsiteChange = this.onWebsiteChange.bind(this);
    this.onKeywordsChange = this.onKeywordsChange.bind(this);
    this.onReleaseTextChange = this.onReleaseTextChange.bind(this);
    this.onSubmitPressReleasePage3 = this.onSubmitPressReleasePage3.bind(this);

    this.onBack = this.onBack.bind(this);
  }

  // PressReleasePage1

  onAmazonURLChange(e) {
    const amazonURL = e.target.value;
    this.setState(() => ({ amazonURL }));
  }

  onFictionOrNonFictionChange(e) {
    const fictionOrNonFiction = e.target.value;
    this.setState(() => ({ fictionOrNonFiction }));
  }

  onGenreChange(e) {
    const genre = e.target.value;
    this.setState(() => ({ genre }));
  }

  onSubGenreChange(e) {
    const subGenre = e.target.value;
    this.setState(() => ({ subGenre }));
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onSubmitPressReleasePage1(e) {
    e.preventDefault();
    const {
      amazonURL,
      fictionOrNonFiction,
      genre,
      email
    } = this.state;
    let error = {
      message: "",
      amazonURL: "",
      fictionOrNonFiction: "",
      genre: "",
      email: ""
    };

    if (!amazonURL) {
      error.amazonURL = 'Please fill in an Amazon URL.';
    } else if (!amazonURL.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)) {
      error.amazonURL = 'Please provide a valid Amazon.com URL.';
    };
    if (!fictionOrNonFiction) {
      error.fictionOrNonFiction = 'this will not render to screen';
    };
    if (genre === 'Please select' && fictionOrNonFiction === 'Fiction') {
      error.genre = 'Please select a genre.';
    };
    if (!email) {
      error.email = 'Please enter an email.';
    } else if (!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      error.email = 'Please provide a valid email address.';
    };
    if (
      error.amazonURL ||
      error.fictionOrNonFiction ||
      error.genre ||
      error.email
    ) {
      error.message = 'Please fix errors.'
      this.setState(() => ({ error }));
    };
    if (!error.message) {
      console.log(this.state);
      const currentPage = "PressReleasePage2";
      this.setState(() => ({
        error,
        currentPage
      }));
    };
  };

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
    const {
      price,
      promoType
    } = this.state;
    let error = {
      message: "",
      price: "",
      promoType: ""
    }

    if (!price) {
      error.price = "Please enter a price.";
    };
    if (!promoType) {
      error.promoType = "this also won't render";
    };
    if (
      error.price ||
      error.promoType
    ) {
      error.message = "Please fix all errors.";
      this.setState(() => ({ error }));
    };
    if (!error.message) {
      console.log(this.state);

      const currentPage = "PressReleasePage3";
      this.setState(() => ({
        error,
        currentPage
      }));
    }
  };

  // PressReleasePage3

  onWebsiteChange(e) {
    const website = e.target.value;
    this.setState(() => ({ website }));
  };

  onKeywordsChange(e) {
    const keywords = e.target.value;
    this.setState(() => ({ keywords }));
  };

  onReleaseTextChange(e) {
    const releaseText = e.target.value;
    this.setState(() => ({ releaseText }));
  };

  onSubmitPressReleasePage3(e) {
    e.preventDefault();
    const {
      website,
      keywords,
      releaseText
    } = this.state;
    let error = {
      message: "",
      website: "",
      keywords: "",
      releaseText: ""
    };

    if (!releaseText) {
      error.releaseText = "Please enter a Press Release.";
    };
    // test for if valid website address with RegEx
    // if (website && )
    if (
      error.description ||
      error.authorBio
    ) {
      error.message = "Please fix all errors.";
      this.setState(() => ({ error }));
    }
    if (!error.message) {
      console.log(this.state);
      const currentPage = "SubmissionSuccess";
      this.setState(() => ({
        error,
        currentPage
      }));

      pressReleaseToNodemailer(this.state);
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
      fictionOrNonFiction,
      genre,
      subGenre,
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
        amazonURL={amazonURL}
        fictionOrNonFiction={fictionOrNonFiction}
        genre={genre}
        subGenre={subGenre}
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
        onAmazonURLChange={this.onAmazonURLChange}
        onFictionOrNonFictionChange={this.onFictionOrNonFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
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
