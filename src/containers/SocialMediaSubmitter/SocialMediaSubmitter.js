import React, { Component } from "react";
import moment from "moment";

import SocialMediaComponent from '../../components/SocialMediaComponent/SocialMediaComponent';
import mediaToNodemailer from "./mediaToNodemailer/mediaToNodemailer";
import genreOptions from "../../components/FormElements/options/genreOptions";
import nonFictionOrFictionOptions from "../../components/FormElements/options/nonFictionOrFictionOptions";

export default class SocialMediaSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "SocialMediaPage1",
      error: {
        message: "",
        amazonUrl: "",
        fictionOrNonFiction: "",
        genre: "",
        email: "",
        regPrice: "",
        salePrice: "",
        keywords: "",
        tweet: "",
        facebook: "",
        notes: ""
      },

      // SocialMediaPage1
      amazonUrl: "",
      fictionOrNonFiction: nonFictionOrFictionOptions[0],
      genre: genreOptions[0],
      subGenre: "",
      email: "",

      // SocialMediaPage2
      regPrice: "",
      salePrice: "",
      startDate: null,
      endDate: null,
      calendarFocus: null,

      // SocialMediaPage3
      keywords: "",
      tweet: "",
      facebook: "",
      notes: ""
    };

    // SocialMediaPage1
    this.onAmazonUrlChange = this.onAmazonUrlChange.bind(this);
    this.onFictionOrNonFictionChange = this.onFictionOrNonFictionChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitSocialMediaPage1 = this.onSubmitSocialMediaPage1.bind(this);

    // SocialMediaPage2
    this.onRegPriceChange = this.onRegPriceChange.bind(this);
    this.onSalePriceChange = this.onSalePriceChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitSocialMediaPage2 = this.onSubmitSocialMediaPage2.bind(this);

    // SocialMediaPage3
    this.onKeywordsChange = this.onKeywordsChange.bind(this);
    this.onTweetChange = this.onTweetChange.bind(this);
    this.onFacebookChange = this.onFacebookChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.onSubmitSocialMediaPage3 = this.onSubmitSocialMediaPage3.bind(this);

    this.onBack = this.onBack.bind(this);
  }

  // SocialMediaPage1

  onAmazonUrlChange(e) {
    const amazonUrl = e.target.value;
    this.setState(() => ({ amazonUrl }));
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

  onSubmitSocialMediaPage1(e) {
    e.preventDefault();
    const {
      amazonUrl,
      fictionOrNonFiction,
      genre,
      email
    } = this.state;
    let error = {
      message: "",
      amazonUrl: "",
      fictionOrNonFiction: "",
      genre: "",
      email: ""
    };

    if (!amazonUrl) {
      error.amazonUrl = 'Please fill in an Amazon URL.';
    } else if (!amazonUrl.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)) {
      error.amazonUrl = 'Please provide a valid Amazon.com URL.';
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
      error.amazonUrl ||
      error.fictionOrNonFiction ||
      error.genre ||
      error.email
    ) {
      error.message = 'Please fix errors.'
      this.setState(() => ({ error }));
    };
    if (!error.message) {
      console.log(this.state);
      const currentPage = "SocialMediaPage2";
      this.setState(() => ({
        error,
        currentPage
      }));
    };
  };

  // SocialMediaPage2

  onRegPriceChange(e) {
    const regPrice = e.target.value;
    if (!regPrice || regPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ regPrice }));
    }
  }

  onSalePriceChange(e) {
    const salePrice = e.target.value;
    if (!salePrice || salePrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ salePrice }));
    }
  }

  onDatesChange({ startDate, endDate }) {
    this.setState(() => ({ startDate, endDate }));
  }

  onFocusChange(calendarFocus) {
    this.setState(() => ({ calendarFocus }));
  }

  onSubmitSocialMediaPage2(e) {
    e.preventDefault();
    const {
      regPrice,
    } = this.state;
    let error = {
      message: "",
      regPrice: "",
    }

    if (!regPrice) {
      error.regPrice = "Please enter a regPrice.";
    };
    if (
      error.regPrice
    ) {
      error.message = "Please fix all errors.";
      this.setState(() => ({ error }));
    };
    if (!error.message) {
      console.log(this.state);

      const currentPage = "SocialMediaPage3";
      this.setState(() => ({
        error,
        currentPage
      }));
    }
  };

  // SocialMediaPage3

  onKeywordsChange(e) {
    const keywords = e.target.value;
    this.setState(() => ({ keywords }));
  };

  onTweetChange(e) {
    const tweet = e.target.value.slice(0, 280);
    this.setState(() => ({ tweet }));
  };

  onFacebookChange(e) {
    const facebook = e.target.value.slice(0, 1999);
    this.setState(() => ({ facebook }));
  }

  onNotesChange(e) {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
  }

  onSubmitSocialMediaPage3(e) {
    e.preventDefault();
    console.log(this.state);
    const currentPage = "SubmissionSuccess";
    this.setState(() => ({
      currentPage
    }));
  
    mediaToNodemailer(this.state);
  }

  onBack(e) {
    if (this.state.currentPage === "SocialMediaPage2") {
      const currentPage = "SocialMediaPage1";
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === "SocialMediaPage3") {
      const currentPage = "SocialMediaPage2";
      this.setState(() => ({ currentPage }));
    }
  }

  render() {
    const {
      currentPage,
      error,
      amazonUrl,
      fictionOrNonFiction,
      genre,
      subGenre,
      email,
      regPrice,
      salePrice,
      startDate,
      endDate,
      calendarFocus,
      keywords,
      tweet,
      facebook,
      notes
    } = this.state;
    return (
      <SocialMediaComponent
        // State
        currentPage={currentPage}
        error={error}

        // SocialMediaPage1
        amazonUrl={amazonUrl}
        fictionOrNonFiction={fictionOrNonFiction}
        genre={genre}
        subGenre={subGenre}
        email={email}

        // SocialMediaPage2
        regPrice={regPrice}
        salePrice={salePrice}
        startDate={startDate}
        endDate={endDate}
        calendarFocus={calendarFocus}

        // SocialMediaPage3
        keywords={keywords}
        tweet={tweet}
        facebook={facebook}
        notes={notes}

        // Methods
        onBack={this.onBack}

        // SocialMediaPage1
        onAmazonUrlChange={this.onAmazonUrlChange}
        onFictionOrNonFictionChange={this.onFictionOrNonFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
        onEmailChange={this.onEmailChange}
        onSubmitSocialMediaPage1={this.onSubmitSocialMediaPage1}

        // SocialMediaPage2
        onRegPriceChange={this.onRegPriceChange}
        onSalePriceChange={this.onSalePriceChange}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        onSubmitSocialMediaPage2={this.onSubmitSocialMediaPage2}

        // SocialMediaPage3
        onKeywordsChange={this.onKeywordsChange}
        onTweetChange={this.onTweetChange}
        onFacebookChange={this.onFacebookChange}
        onNotesChange={this.onNotesChange}
        onSubmitSocialMediaPage3={this.onSubmitSocialMediaPage3}
      />
    );
  }
}
