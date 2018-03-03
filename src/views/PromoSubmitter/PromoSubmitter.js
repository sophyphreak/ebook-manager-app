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

      // // BookDetailsOne
      // title:        'Zhuangzi: The Essential Writings: With Selections from Traditional Commentaries (Hackett Classics)',
      // ASIN:         'B003ZDNYWA',
      // amazonURL:    'https://www.amazon.com/Zhuangzi-Essential-Selections-Traditional-Commentaries-ebook/dp/B003ZDNYWA/ref=pd_sim_351_2?_encoding=UTF8&psc=1&refRID=5J3S0PMW5KKDQHFM21NR',
      // regPrice:     '$10.09',
      // isFiction:    'Nonfiction',
      // genre:        'Philosophy',
      // subGenre:     'Eastern Philosophy',
      // firstName:    'Brook',
      // lastName:     'Ziporyn',
      // email:        'fake-email@gmail.com',

      // // BookDetailsTwo
      // description:  'Ideal for students and scholars alike, this edition of Zhuangzi (Chuang Tzu) includes the complete Inner Chapters, extensive selections from the Outer and Miscellaneous Chapters, and judicious selections from two thousand years of traditional Chinese commentaries, which provide the reader access to the text as well as to its reception and interpretation. A glossary, brief biographies of the commentators, a bibliography, and an index are also included.',
      // authorBio:    'Brook Ziporyn is Associate Professor of Religion and Philosophy, Northwestern University.',
      // // cover:        '',
      
      // // SiteSelection
      // promoType: '99 cents',
      // promoSites: 'all of them please!',

      // // DateSelection
      // startDate:    moment('2018-3-1'),
      // endDate:      moment('2018-3-5'),

      // BookDetailsOne
      title:         '',
      ASIN:          '',
      amazonURL:     '',
      regPrice:      '',
      isFiction:     '',
      genre:         '',
      subGenre:      '',
      firstName:     '',
      lastName:      '',
      email:         '',

      // BookDetailsTwo
      description:   '',
      authorBio:     '',
      // cover:        '',

      // SiteSelection
      promoType:     '',
      promoSites:    '',

      // DateSelection
      startDate:     moment(),
      endDate:       moment(),
      calendarFocus: null,
      error:         ''
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
    } else if (!this.state.amazonURL.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)) {
      this.setState(() => ({ error: 'Please provide a valid Amazon url.'}))
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
    axios.post('/api/promo_submitter', {
      text: `PROMO SUBMITTER REQUEST

        Title: ${this.state.title}
        ASIN: ${this.state.ASIN}
        Amazon URL: ${this.state.amazonURL}
        Regular Price ($): ${this.state.amazonURL}
        Fiction or Nonfiction?: ${this.state.isFiction}
        Genre: ${this.state.genre}
        Sub-Genre: ${this.state.subGenre}
        Author First Name: ${this.state.firstName}
        Author Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Description: ${this.state.description}
        Author Biography: ${this.state.authorBio}
        Promo Type: ${this.state.promoType}
        Promo Sites: ${this.state.promoSites}
        Start Date: ${this.state.startDate.format('MMMM Do YYYY')}
        End Date: ${this.state.endDate.format('MMMM Do YYYY')}
      `,
      html: `
        <h3>Promo Submitter Request</h3>
        <p>Title: ${this.state.title}</p>
        <p>ASIN: ${this.state.ASIN}</p>
        <p>Amazon URL: ${this.state.amazonURL}</p>
        <p>Regular Price ($): ${this.state.regPrice}</p>
        <p>Fiction or Nonfiction?: ${this.state.isFiction}</p>
        <p>Genre: ${this.state.genre}</p>
        <p>Sub-Genre: ${this.state.subGenre}</p>
        <p>Author First Name: ${this.state.firstName}</p>
        <p>Author Last Name: ${this.state.lastName}</p>
        <p>Email: ${this.state.email}</p>
        <p>Description: ${this.state.description}</p>
        <p>Author Biography: ${this.state.authorBio}</p>
        <p>Promo Type: ${this.state.promoType}</p>
        <p>Promo Sites: ${this.state.promoSites}</p>
        <p>Start Date: ${this.state.startDate.format('MMMM Do YYYY')}</p>
        <p>End Date: ${this.state.endDate.format('MMMM Do YYYY')}</p>
      `
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