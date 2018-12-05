import React, { Component } from 'react';
import moment from 'moment';
import { isValidPrice } from 'dao-of-validation';

import promoPage1Validation from './promoPage1Validation/promoPage1Validation';
import promoPage2Validation from './promoPage2Validation/promoPage2Validation';
import promoPage3Validation from './promoPage3Validation/promoPage3Validation';
import nonFictionOrFictionOptions from '../../views/FormElements/options/nonFictionOrFictionOptions';
import promoTypeOptions from '../../views/FormElements/options/promoTypeOptions';
import sendPromoToNodemailer from './sendPromoToNodemailer/sendPromoToNodemailer';
import PromoComponent from '../../views/PromoComponent/PromoComponent';

export default class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'PromoPage1',
      error: {},

      // PromoPage1
      amazonUrl: '',
      nonFictionOrFiction: nonFictionOrFictionOptions[0],
      genre: 'Please select',
      subGenre: '',
      email: '',

      // PromoPage2
      price: '',
      promoType: promoTypeOptions[0],
      startDate: moment(),
      endDate: moment(),
      calendarFocus: null,

      // PromoPage3
      description: '',
      authorBio: ''
    };

    // PromoPage1
    this.onAmazonUrlChange = this.onAmazonUrlChange.bind(this);
    this.onNonFictionOrFictionChange = this.onNonFictionOrFictionChange.bind(
      this
    );
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
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

  onSubmitPromoPage1(e) {
    e.preventDefault();
    const { error, errorsExist } = promoPage1Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'PromoPage2';
    this.setState(() => ({ currentPage }));
  }

  // PromoPage2

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

  onSubmitPromoPage2(e) {
    e.preventDefault();
    const { error, errorsExist } = promoPage2Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'PromoPage3';
    this.setState(() => ({ currentPage }));
  }

  // PromoPage3

  onDescriptionChange(e) {
    const description = e.target.value.slice(0, 1999);
    this.setState(() => ({ description }));
  }

  onAuthorBioChange(e) {
    const authorBio = e.target.value;
    this.setState(() => ({ authorBio }));
  }

  onSubmitPromoPage3(e) {
    e.preventDefault();
    const { error, errorsExist } = promoPage3Validation(this.state);
    this.setState(() => ({ error }));
    if (errorsExist) {
      return;
    }
    console.log(this.state);
    const currentPage = 'SubmissionSuccess';
    this.setState(() => ({ currentPage }));
    sendPromoToNodemailer(this.state);
  }

  onBack(e) {
    if (this.state.currentPage === 'PromoPage2') {
      const currentPage = 'PromoPage1';
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === 'PromoPage3') {
      const currentPage = 'PromoPage2';
      this.setState(() => ({ currentPage }));
    }
  }

  render() {
    const {
      currentPage,
      error,
      title,
      asin,
      amazonUrl,
      price,
      nonFictionOrFiction,
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
      <PromoComponent
        // State
        currentPage={currentPage}
        error={error}
        // PromoPage1
        amazonUrl={amazonUrl}
        nonFictionOrFiction={nonFictionOrFiction}
        genre={genre}
        subGenre={subGenre}
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
        onAmazonUrlChange={this.onAmazonUrlChange}
        onNonFictionOrFictionChange={this.onNonFictionOrFictionChange}
        onGenreChange={this.onGenreChange}
        onSubGenreChange={this.onSubGenreChange}
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
