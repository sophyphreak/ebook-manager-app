import React, { Component } from "react";
import moment from "moment";

import nonFictionOrFictionOptions from "../../components/FormElements/options/nonFictionOrFictionOptions";
import genreOptions from "../../components/FormElements/options/genreOptions";
import promoTypeOptions from '../../components/FormElements/options/promoTypeOptions';  
import isValidPrice from "../submitterUtils/validation/onChange/isValidPrice";
import updateErrorsReleasePage1 from "./releasePage1Validation/updateErrorsReleasePage1";
import releaseToNodemailer from './releaseToNodemailer/releaseToNodemailer';
import PressReleaseComponent from '../../components/PressReleaseComponent/PressReleaseComponent';

export default class PressReleaseSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "PressReleasePage1",
      error: {
        message: "",
        amazonUrl: "",
        nonFictionOrFiction: "",
        genre: "",
        email: "",
        price: "",
        promoType: "",
        website: "",
        keywords: "",
        releaseText: ""
      },

      // PressReleasePage1
      amazonUrl: "",
      nonFictionOrFiction: nonFictionOrFictionOptions[0],
      genre: genreOptions[0],
      subGenre: "",
      email: "",

      // PressReleasePage2
      price: "",
      promoType: promoTypeOptions[0],
      startDate: null,
      endDate: null,
      calendarFocus: null,

      // PressReleasePage3
      website: "",
      keywords: "",
      releaseText: ""
    };

    // PressReleasePage1
    this.onAmazonUrlChange = this.onAmazonUrlChange.bind(this);
    this.onNonFictionOrFictionChange = this.onNonFictionOrFictionChange.bind(this);
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

  onSubmitPressReleasePage1(e) {
    e.preventDefault();
    const {
      error,
      errorsExist
    } = updateErrorsReleasePage1(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    };
    console.log(this.state);
    const currentPage = "PressReleasePage2";
    this.setState(() => ({ currentPage }));
  };

  // PressReleasePage2

  onPriceChange(e) {
    const price = e.target.value;
    if (isValidPrice(price)) {
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
    if (website && !website.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
      error.website = "Please enter a valid uril.";
    };
    if (
      error.releaseText ||
      error.website
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

      releaseToNodemailer(this.state);
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
      amazonUrl,
      nonFictionOrFiction,
      genre,
      subGenre,
      email,
      price,
      promoType,
      startDate,
      endDate,
      calendarFocus,
      website,
      keywords,
      releaseText
    } = this.state;
    return (
      <PressReleaseComponent
        // State
        currentPage={currentPage}
        error={error}

        // PressReleasePage1
        amazonUrl={amazonUrl}
        nonFictionOrFiction={nonFictionOrFiction}
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
        website={website}
        keywords={keywords}
        releaseText={releaseText}

        // Methods
        onBack={this.onBack}

        // PressReleasePage1
        onAmazonUrlChange={this.onAmazonUrlChange}
        onNonFictionOrFictionChange={this.onNonFictionOrFictionChange}
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
        onWebsiteChange={this.onWebsiteChange}
        onKeywordsChange={this.onKeywordsChange}
        onReleaseTextChange={this.onReleaseTextChange}
        onSubmitPressReleasePage3={this.onSubmitPressReleasePage3}
      />
    );
  }
}
