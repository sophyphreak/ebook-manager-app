import React, { Component } from "react";
import moment from "moment";

import genreOptions from "../../components/FormElements/options/genreOptions";
import nonFictionOrFictionOptions from "../../components/FormElements/options/nonFictionOrFictionOptions";
import isValidPrice from "../submitterUtils/validation/onChange/isValidPrice";
import mediaPage1Validation from "./mediaPage1Validation/mediaPage1Validation";
import mediaPage2Validation from "./mediaPage2Validation/mediaPage2Validation";
import mediaPage3Validation from "./mediaPage3Validation/mediaPage3Validation";
import sendMediaToNodemailer from "./sendMediaToNodemailer/sendMediaToNodemailer";
import SocialMediaComponent from '../../components/SocialMediaComponent/SocialMediaComponent';

export default class SocialMediaSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "SocialMediaPage1",
      error: {
        message: "",
        amazonUrl: "",
        nonFictionOrFiction: "",
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
      nonFictionOrFiction: nonFictionOrFictionOptions[0],
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
    this.onNonFictionOrFictionChange = this.onNonFictionOrFictionChange.bind(this);
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

  onNonFictionOrFictionChange(e) {
    const nonFictionOrFiction = e.target.value;
    this.setState(() => ({ nonFictionOrFiction }));
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
      error,
      errorsExist
    } = mediaPage1Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    };
    console.log(this.state);
    const currentPage = "SocialMediaPage2";
    this.setState(() => ({ currentPage }));
  };

  // SocialMediaPage2

  onRegPriceChange(e) {
    const regPrice = e.target.value;
    if (isValidPrice(regPrice)) {
      this.setState(() => ({ regPrice }));
    }
  }

  onSalePriceChange(e) {
    const salePrice = e.target.value;
    if (isValidPrice(salePrice)) {
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
      error,
      errorsExist
    } = mediaPage2Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    };
    console.log(this.state);
    const currentPage = "SocialMediaPage3";
    this.setState(() => ({ currentPage }));
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
    const {
      error, 
      errorsExist
    } = mediaPage3Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    };
    console.log(this.state);
    const currentPage = "SubmissionSuccess";
    this.setState(() => ({
      currentPage
    }));
    sendMediaToNodemailer(this.state);
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
      nonFictionOrFiction,
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
        nonFictionOrFiction={nonFictionOrFiction}
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
        onNonFictionOrFictionChange={this.onNonFictionOrFictionChange}
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
