import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import BookDetailsOne from './PromoPages/BookDetailsOne';
import BookDetailsTwo from './PromoPages/BookDetailsTwo';
import SiteSelection from './PromoPages/SiteSelection';
import DateSelection from './PromoPages/DateSelection';

import CurrentPrice from '../FormElements/CurrentPrice';
import EndDate from '../FormElements/EndDate';
import NumReviews from '../FormElements/NumReviews';
import ReviewAvg from '../FormElements/ReviewAvg';
import StartDate from '../FormElements/StartDate';
import Website from '../FormElements/Website';

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
      // startDateCalendarFocused: false,
      // endDateCalendarFocused: false,

      numReviews:   '',
      reviewAvg:    '',
      currentPrice: '',
      website:      '',
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
    // this.onStartDateChange = this.onStartDateChange.bind(this);
    // this.onStartDateFocusChange = this.onStartDateFocusChange.bind(this);
    // this.onEndDateChange = this.onEndDateChange.bind(this);
    // this.onEndDateFocusChange = this.onEndDateFocusChange.bind(this);    
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitDateSelection = this.onSubmitDateSelection.bind(this);

    
    this.onNumReviewsChange = this.onNumReviewsChange.bind(this);
    this.onReviewAvgChange = this.onReviewAvgChange.bind(this);
    this.onCurrentPriceChange = this.onCurrentPriceChange.bind(this);
    this.onWebsiteChange = this.onWebsiteChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
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
    // if (
    //   !this.state.title ||
    //   !this.state.ASIN ||
    //   !this.state.amazonURL ||
    //   !this.state.regPrice ||
    //   !this.state.isFiction ||
    //   !this.state.genre ||
    //   !this.state.firstName ||
    //   !this.state.lastName ||
    //   !this.state.email
    // ) {
    //   this.setState(() => ({ error: 'Please fill in all required fields.' }));      
    // } else if(!this.state.ASIN.match(/^[0-9A-Z]{10}$/)) {
    //   this.setState(() => ({ error: 'Please provide a valid ASIN.' }))
    // } else if (!this.state.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
    //   this.setState(() => ({ error: 'Please provide a valid email address.' }));    
    // } else {
    // console.log(this.state);

    const error = '';
    this.setState(() => ({ error }));

    const currentPage = 'BookDetailsTwo';
    this.setState(() => ({ currentPage }));
    // }
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

  // onStartDateChange(startDate) {
  //   if (startDate) {
  //     this.setState(() => ({ startDate }));
  //   }
  // };

  // onStartDateFocusChange({ focused }) {
  //   this.setState(() => ({ startDateCalendarFocused: focused }))
  // };

  // onEndDateChange(endDate) {
  //   if (endDate) {
  //     this.setState(() => ({ endDate }));
  //   }
  // };

  // onEndDateFocusChange({ focused }) {
  //   this.setState(() => ({ endDateCalendarFocused: focused }))
  // };

  onDatesChange({ startDate, endDate }) {
    this.setState(() => ({ startDate, endDate }));
  };

  onFocusChange(calendarFocus) {
    this.setState(() => ({ calendarFocus }));
  };

  onSubmitDateSelection(e) {
    e.preventDefault();
    console.log(this.state);

    const error = ''
    this.setState(() => ({ error }));
    
    const currentPage = "SubmissionSuccess";
    this.setState(() => ({ currentPage }));
  };



  onNumReviewsChange(e) {
    const numReviews = e.target.value;
    if (!numReviews || numReviews.match(/^\d{1,}$/)) {
      this.setState(() => ({ numReviews }));
    }
  };

  onReviewAvgChange(e) {
    const reviewAvg = e.target.value;
    if (!reviewAvg || reviewAvg.match(/^[0-5](\.\d{0,1})?$/)) {   
      this.setState(() => ({ reviewAvg }));
    }
  };

  onCurrentPriceChange(e) {
    const currentPrice = e.target.value;
    if (!currentPrice || currentPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ currentPrice }));
    }
  };

  onWebsiteChange(e) {
    const website = e.target.value;
    this.setState(() => ({ website }));
  };





  // onSubmit(e) {
  //   e.preventDefault();
  //   if (
  //     !this.state.ASIN ||
  //     !this.state.firstName ||
  //     !this.state.lastName ||
  //     !this.state.email ||
  //     !this.state.startDate ||
  //     !this.state.endDate ||
  //     !this.state.title ||
  //     !this.state.amazonURL ||
  //     !this.state.description ||
  //     !this.state.numReviews ||
  //     !this.state.regPrice ||
  //     !this.state.currentPrice ||
  //     !this.state.genre
  //   ) {
  //     this.setState(() => ({ error: 'Please fill in all required fields.'}));
  //   } else if (!this.state.ASIN.match(/^[0-9A-Z]{10}$/)) {
  //     this.setState(() => ({ error: 'Please provide a valid ASIN.' }))
  //   } else if (!this.state.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
  //     this.setState(() => ({ error: 'Please provide a valid email address.' }));    
  //   } else if (this.state.startDate > this.state.endDate) {
  //     this.setState(() => ({ error: 'Please make sure the End Date comes after the Start Date.'}))
  //   } else if (!this.state.amazonURL.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
  //     // currently accepts any valid URL
  //     this.setState(() => ({ error: 'Please provide a valid Amazon URL.' }));
  //   } else if (this.state.reviewAvg && parseInt(this.state.reviewAvg) > 5) { 
  //     this.setState(() => ({ error: 'Please provide a Review Avg of 5 or less.' }));      
  //   } else if (this.state.website && !this.state.website.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
  //     this.setState(() => ({ error: 'Please provide a valid website URL.' }));
  //   } else {
  //     this.setState(() => ({ error: '' }));      
  //     console.log(this.state);
  //     alert('SUCCESS! See console for printed state. (Ctrl + Shift + i, and then click Console tab)');
      
  //     // // Currently constructing POST call to server in order to send an email      
  //     // fetch('/promo_submitter', {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Accept': 'application/json',
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify({
  //     //     email: 'this is the email',
  //     //     // then continue this with the other inputs, such as email body, etc.
  //     //   })
  //     // })
  //     //   .then((response) => response.json())
  //     //   .then((responseJson) => {
  //     //     if (responseJson.success) {
  //     //       console.log(responseJson);
  //     //     }
  //     //     console.log(responseJson);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.error(error);
  //     //   });
  //   };
  // // // turn off validation for testing
  // // e.preventDefault();
  // // this.setState(() => ({ error: '' }));      
  // // console.log(this.state);
  // };

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