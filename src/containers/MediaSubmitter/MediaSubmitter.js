import React, { Component } from 'react';
import moment from 'moment';
import { isValidPrice } from 'dao-of-validation';

import genreOptions from '../../components/FormElements/options/genreOptions';
import nonFictionOrFictionOptions from '../../components/FormElements/options/nonFictionOrFictionOptions';
import mediaPage1Validation from './mediaPage1Validation/mediaPage1Validation';
import mediaPage2Validation from './mediaPage2Validation/mediaPage2Validation';
import mediaPage3Validation from './mediaPage3Validation/mediaPage3Validation';
import sendMediaToNodemailer from './sendMediaToNodemailer/sendMediaToNodemailer';
import MediaComponent from '../../components/MediaComponent/MediaComponent';

export default class MediaSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'MediaPage1',
      error: {
        message: '',
        amazonUrl: '',
        nonFictionOrFiction: '',
        genre: '',
        email: '',
        regPrice: '',
        salePrice: '',
        keywords: '',
        tweet: '',
        facebook: '',
        notes: ''
      },

      // MediaPage1
      amazonUrl: '',
      nonFictionOrFiction: nonFictionOrFictionOptions[0],
      genre: genreOptions[0],
      subGenre: '',
      email: '',

      // MediaPage2
      regPrice: '',
      salePrice: '',
      startDate: null,
      endDate: null,
      calendarFocus: null,

      // MediaPage3
      keywords: '',
      tweet: '',
      facebook: '',
      notes: ''
    };

    // MediaPage1
    this.onAmazonUrlChange = this.onAmazonUrlChange.bind(this);
    this.onNonFictionOrFictionChange = this.onNonFictionOrFictionChange.bind(
      this
    );
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitMediaPage1 = this.onSubmitMediaPage1.bind(this);

    // MediaPage2
    this.onRegPriceChange = this.onRegPriceChange.bind(this);
    this.onSalePriceChange = this.onSalePriceChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitMediaPage2 = this.onSubmitMediaPage2.bind(this);

    // MediaPage3
    this.onKeywordsChange = this.onKeywordsChange.bind(this);
    this.onTweetChange = this.onTweetChange.bind(this);
    this.onFacebookChange = this.onFacebookChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.onSubmitMediaPage3 = this.onSubmitMediaPage3.bind(this);

    this.onBack = this.onBack.bind(this);
  }

  // MediaPage1

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

  onSubmitMediaPage1(e) {
    e.preventDefault();
    const { error, errorsExist } = mediaPage1Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'MediaPage2';
    this.setState(() => ({ currentPage }));
  }

  // MediaPage2

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

  onSubmitMediaPage2(e) {
    e.preventDefault();
    const { error, errorsExist } = mediaPage2Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'MediaPage3';
    this.setState(() => ({ currentPage }));
  }

  // MediaPage3

  onKeywordsChange(e) {
    const keywords = e.target.value;
    this.setState(() => ({ keywords }));
  }

  onTweetChange(e) {
    const tweet = e.target.value.slice(0, 280);
    this.setState(() => ({ tweet }));
  }

  onFacebookChange(e) {
    const facebook = e.target.value.slice(0, 1999);
    this.setState(() => ({ facebook }));
  }

  onNotesChange(e) {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
  }

  onSubmitMediaPage3(e) {
    e.preventDefault();
    const { error, errorsExist } = mediaPage3Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'SubmissionSuccess';
    this.setState(() => ({
      currentPage
    }));
    sendMediaToNodemailer(this.state);
  }

  onBack(e) {
    if (this.state.currentPage === 'MediaPage2') {
      const currentPage = 'MediaPage1';
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === 'MediaPage3') {
      const currentPage = 'MediaPage2';
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
      <MediaComponent
        // State
        currentPage={currentPage}
        error={error}
        // MediaPage1
        amazonUrl={amazonUrl}
        nonFictionOrFiction={nonFictionOrFiction}
        genre={genre}
        subGenre={subGenre}
        email={email}
        // MediaPage2
        regPrice={regPrice}
        salePrice={salePrice}
        startDate={startDate}
        endDate={endDate}
        calendarFocus={calendarFocus}
        // MediaPage3
        keywords={keywords}
        tweet={tweet}
        facebook={facebook}
        notes={notes}
        // Methods
        onBack={this.onBack}
        // MediaPage1
        onAmazonUrlChange={this.onAmazonUrlChange}
        onNonFictionOrFictionChange={this.onNonFictionOrFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
        onEmailChange={this.onEmailChange}
        onSubmitMediaPage1={this.onSubmitMediaPage1}
        // MediaPage2
        onRegPriceChange={this.onRegPriceChange}
        onSalePriceChange={this.onSalePriceChange}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
        onSubmitMediaPage2={this.onSubmitMediaPage2}
        // MediaPage3
        onKeywordsChange={this.onKeywordsChange}
        onTweetChange={this.onTweetChange}
        onFacebookChange={this.onFacebookChange}
        onNotesChange={this.onNotesChange}
        onSubmitMediaPage3={this.onSubmitMediaPage3}
      />
    );
  }
}
