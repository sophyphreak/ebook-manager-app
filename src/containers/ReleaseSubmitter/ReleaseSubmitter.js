import React, { Component } from 'react';
import { isValidPrice } from 'dao-of-validation';

import nonFictionOrFictionOptions from '../../views/FormElements/options/nonFictionOrFictionOptions';
import genreOptions from '../../views/FormElements/options/genreOptions';
import promoTypeOptions from '../../views/FormElements/options/promoTypeOptions';
import releasePage1Validation from './releasePage1Validation/releasePage1Validation';
import releasePage2Validation from './releasePage2Validation/releasePage2Validation';
import releasePage3Validation from './releasePage3Validation/releasePage3Validation';
import sendReleaseToNodemailer from './sendReleaseToNodemailer/sendReleaseToNodemailer';
import ReleaseComponent from '../../views/ReleaseComponent/ReleaseComponent';

export default class ReleaseSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'ReleasePage1',
      error: {
        message: '',
        amazonUrl: '',
        nonFictionOrFiction: '',
        genre: '',
        email: '',
        price: '',
        promoType: '',
        website: '',
        keywords: '',
        releaseText: ''
      },

      // ReleasePage1
      amazonUrl: '',
      nonFictionOrFiction: nonFictionOrFictionOptions[0],
      genre: genreOptions[0],
      subGenre: '',
      email: '',

      // ReleasePage2
      price: '',
      promoType: promoTypeOptions[0],
      startDate: null,
      endDate: null,
      calendarFocus: null,

      // ReleasePage3
      website: '',
      keywords: '',
      releaseText: ''
    };

    // ReleasePage1
    this.onAmazonUrlChange = this.onAmazonUrlChange.bind(this);
    this.onNonFictionOrFictionChange = this.onNonFictionOrFictionChange.bind(
      this
    );
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitReleasePage1 = this.onSubmitReleasePage1.bind(this);

    // ReleasePage2
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onPromoTypeChange = this.onPromoTypeChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitReleasePage2 = this.onSubmitReleasePage2.bind(this);

    // ReleasePage3
    this.onWebsiteChange = this.onWebsiteChange.bind(this);
    this.onKeywordsChange = this.onKeywordsChange.bind(this);
    this.onReleaseTextChange = this.onReleaseTextChange.bind(this);
    this.onSubmitReleasePage3 = this.onSubmitReleasePage3.bind(this);

    this.onBack = this.onBack.bind(this);
  }

  // ReleasePage1

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

  onSubmitReleasePage1(e) {
    e.preventDefault();
    const { error, errorsExist } = releasePage1Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'ReleasePage2';
    this.setState(() => ({ currentPage }));
  }

  // ReleasePage2

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

  onSubmitReleasePage2(e) {
    e.preventDefault();
    const { error, errorsExist } = releasePage2Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'ReleasePage3';
    this.setState(() => ({ currentPage }));
  }

  // ReleasePage3

  onWebsiteChange(e) {
    const website = e.target.value;
    this.setState(() => ({ website }));
  }

  onKeywordsChange(e) {
    const keywords = e.target.value;
    this.setState(() => ({ keywords }));
  }

  onReleaseTextChange(e) {
    const releaseText = e.target.value;
    this.setState(() => ({ releaseText }));
  }

  onSubmitReleasePage3(e) {
    e.preventDefault();
    const { error, errorsExist } = releasePage3Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'SubmissionSuccess';
    this.setState(() => ({ currentPage }));
    sendReleaseToNodemailer(this.state);
  }

  onBack(e) {
    if (this.state.currentPage === 'ReleasePage2') {
      const currentPage = 'ReleasePage1';
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === 'ReleasePage3') {
      const currentPage = 'ReleasePage2';
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
      <ReleaseComponent
        // State
        currentPage={currentPage}
        error={error}
        // ReleasePage1
        amazonUrl={amazonUrl}
        nonFictionOrFiction={nonFictionOrFiction}
        genre={genre}
        subGenre={subGenre}
        email={email}
        // ReleasePage2
        price={price}
        promoType={promoType}
        startDate={startDate}
        endDate={endDate}
        calendarFocus={calendarFocus}
        // ReleasePage3
        website={website}
        keywords={keywords}
        releaseText={releaseText}
        // Methods
        onBack={this.onBack}
        // ReleasePage1
        onAmazonUrlChange={this.onAmazonUrlChange}
        onNonFictionOrFictionChange={this.onNonFictionOrFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
        onEmailChange={this.onEmailChange}
        onSubmitReleasePage1={this.onSubmitReleasePage1}
        // ReleasePage2
        onPriceChange={this.onPriceChange}
        onPromoTypeChange={this.onPromoTypeChange}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        onSubmitReleasePage2={this.onSubmitReleasePage2}
        // ReleasePage3
        onWebsiteChange={this.onWebsiteChange}
        onKeywordsChange={this.onKeywordsChange}
        onReleaseTextChange={this.onReleaseTextChange}
        onSubmitReleasePage3={this.onSubmitReleasePage3}
      />
    );
  }
}
