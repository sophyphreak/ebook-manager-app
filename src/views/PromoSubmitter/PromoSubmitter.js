import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

import BookDetailsOne from './PromoPages/BookDetailsOne';
import BookDetailsTwo from './PromoPages/BookDetailsTwo';
import SiteSelection from './PromoPages/SiteSelection';
import DateSelection from './PromoPages/DateSelection';

export default class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage:  'BookDetailsOne',

      // BookDetailsOne
      title:        '',
      ASIN:         '',
      amazonURL:    '',
      regPrice:     '',
      isFiction:    '',
      genre:        '',
      subGenre:     '',
      firstName:    '',
      lastName:     '',
      email:        '',

      // BookDetailsTwo
      description:  '',
      authorBio:    '',
      // cover:        '',
      
      // SiteSelection
      promoType: '',
      promoSites: '',

      // DateSelection
      startDate:    moment(),
      endDate:      moment(),
      calendarFocus: null,
      error: ''
    };
  
    // BookDetailsOne
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onASINChange = this.onASINChange.bind(this);
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onRegPriceChange = this.onRegPriceChange.bind(this);
    this.onIsFictionChange = this.onIsFictionChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onSubGenreChange = this.onSubGenreChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmitBookDetailsOne = this.onSubmitBookDetailsOne.bind(this);
    
    // BookDetailsTwo
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAuthorBioChange = this.onAuthorBioChange.bind(this);
    // this.onCoverChange = this.onCoverChange.bind(this);
    this.onSubmitBookDetailsTwo = this.onSubmitBookDetailsTwo.bind(this);

    // SiteSelection
    this.onPromoTypeChange = this.onPromoTypeChange.bind(this);
    this.onPromoSitesChange = this.onPromoSitesChange.bind(this);
    this.onSubmitSiteSelection = this.onSubmitSiteSelection.bind(this);

    // DateSelection
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitDateSelection = this.onSubmitDateSelection.bind(this);
  }

  // BookDetailsOne

  onTitleChange(e) {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onASINChange(e) {
    const ASIN = e.target.value.toUpperCase();
    if (ASIN.match(/^[0-9A-Z]{0,10}$/)) {
      this.setState(() => ({ ASIN }));
    }
  };

  onAmazonURLChange(e) {
    const amazonURL = e.target.value;
    this.setState(() => ({ amazonURL }));
  };
  
  onRegPriceChange(e) {
    const regPrice = e.target.value;
    if (!regPrice || regPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ regPrice }));
    }
  };

  onIsFictionChange(e) {
    const isFiction = e.target.value;
    this.setState(() => ({ isFiction }));
  }
  
  onGenreChange(e) {
    const genre = e.target.value;
    this.setState(() => ({ genre }));
  };

  onSubGenreChange(e) {
    const subGenre = e.target.value;
    this.setState(() => ({ subGenre }));
  };

  onFirstNameChange(e) {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  onLastNameChange(e) {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onSubmitBookDetailsOne(e) {
    e.preventDefault();
    if (
      !this.state.title ||
      !this.state.ASIN ||
      !this.state.amazonURL ||
      !this.state.regPrice ||
      !this.state.isFiction ||
      !this.state.genre ||
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email
    ) {
      this.setState(() => ({ error: 'Please fill in all required fields.' }));      
    } else if(!this.state.ASIN.match(/^[0-9A-Z]{10}$/)) {
      this.setState(() => ({ error: 'Please provide a valid ASIN.' }))
    } else if (!this.state.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      this.setState(() => ({ error: 'Please provide a valid email address.' }));    
    } else {
    console.log(this.state);

    const error = '';
    this.setState(() => ({ error }));

    const currentPage = 'BookDetailsTwo';
    this.setState(() => ({ currentPage }));
    };
  };

  // BookDetailsTwo

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAuthorBioChange(e) {
    const authorBio = e.target.value;
    this.setState(() => ({ authorBio }));
  };

  // onCoverChange(e) {
  //   const cover = e.target.value;
  //   this.setState(() => ({ cover }));
  // };

  onSubmitBookDetailsTwo(e) {
    e.preventDefault();
    if (
      !this.state.description ||
      !this.state.authorBio
    ) {
      this.setState(() => ({ error: 'Please fill in all required fields.' }));
    } else {
    console.log(this.state);

    const error = ''
    this.setState(() => ({ error }));

    const currentPage = "SiteSelection";
    this.setState(() => ({ currentPage }));
    }
  };


  // SiteSelection

  onPromoTypeChange(e) {
    const promoType = e.target.value;
    this.setState(() => ({ promoType }));
  };

  onPromoSitesChange(e) {
    const promoSites = e.target.value;
    this.setState(() => ({ promoSites }));
  };

  onSubmitSiteSelection(e) {
    e.preventDefault();    
    if (
      !this.state.promoType ||
      !this.state.promoSites
    ) {
      this.setState(() => ({ error: 'Please fill in all required fields.' }));      
    } else {
      console.log(this.state);

      const error = ''
      this.setState(() => ({ error }));

      const currentPage = "DateSelection";
      this.setState(() => ({ currentPage }));
    }
  };


  // DateSelection

  onDatesChange({ startDate, endDate }) {
    this.setState(() => ({ startDate, endDate }));
  };

  onFocusChange(calendarFocus) {
    this.setState(() => ({ calendarFocus }));
  };

  onSubmitDateSelection(e) {
    e.preventDefault();
    console.log(this.state);

    const error = '';
    this.setState(() => ({ error }));
    
    const currentPage = "SubmissionSuccess";
    this.setState(() => ({ currentPage }));

    // Currently constructing POST call to server in order to send an email      
    axios.post('/promo_submitter', {
      body: 'This is a message!'
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <h4>Promotion Submitter</h4>
        {
          this.state.currentPage === 'BookDetailsOne' && 
          <BookDetailsOne
            title={this.state.title}
            onTitleChange={this.onTitleChange}
            ASIN={this.state.ASIN}
            onASINChange={this.onASINChange}
            amazonURL={this.state.amazonURL}
            onAmazonURLChange={this.onAmazonURLChange}
            regPrice={this.state.regPrice}
            onRegPriceChange={this.onRegPriceChange}
            isFiction={this.state.isFiction}
            onIsFictionChange={this.onIsFictionChange}
            genre={this.state.genre}
            onGenreChange={this.onGenreChange}
            subGenre={this.state.subGenre}
            onSubGenreChange={this.onSubGenreChange}
            firstName={this.state.firstName}
            onFirstNameChange={this.onFirstNameChange}
            lastName={this.state.lastName}
            onLastNameChange={this.onLastNameChange}
            email={this.state.email}
            onEmailChange={this.onEmailChange}
            onSubmit={this.onSubmitBookDetailsOne}
            error={this.state.error}
          />
        }
        {
          this.state.currentPage === 'BookDetailsTwo' &&
          <BookDetailsTwo
            description={this.state.description}
            onDescriptionChange={this.onDescriptionChange}
            authorBio={this.state.authorBio}
            onAuthorBioChange={this.onAuthorBioChange}
            // cover={this.state.cover}
            // onCoverChange={this.onCoverChange}
            onSubmit={this.onSubmitBookDetailsTwo}
            error={this.state.error}
          />
        }
        {
          this.state.currentPage === 'SiteSelection' &&
          <SiteSelection
            promoType={this.state.promoType}
            onPromoTypeChange={this.onPromoTypeChange}
            promoSites={this.state.promoSites}
            onPromoSitesChange={this.onPromoSitesChange}
            onSubmit={this.onSubmitSiteSelection}
            error={this.state.error}
          />
        }
        {
          this.state.currentPage === 'DateSelection' &&
          <DateSelection
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            onSubmit={this.onSubmitDateSelection}
          />
        }
        {
          this.state.currentPage === 'SubmissionSuccess' &&
          <p className="animated fadeIn">Your Promo Submission has been submitted. Please wait for a confirmation email.</p>
        }
      </div>
    );
  }
};