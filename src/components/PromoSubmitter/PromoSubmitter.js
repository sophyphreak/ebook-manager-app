import React, { Component } from 'react';

import AmazonURL from '../FormElements/AmazonURL';
import ASIN from '../FormElements/ASIN';
import AuthorBio from '../FormElements/AuthorBio';
// import Cover from '../FormElements/Cover';
import CurrentPrice from '../FormElements/CurrentPrice';
import Description from '../FormElements/Description';
import Email from '../FormElements/Email';
import EndDate from '../FormElements/EndDate';
import FirstName from '../FormElements/FirstName';
import Genre from '../FormElements/Genre';
import LastName from '../FormElements/LastName';
import NumReviews from '../FormElements/NumReviews';
import PressRelease from '../FormElements/PressRelease';
import RegPrice from '../FormElements/RegPrice';
import ReviewAvg from '../FormElements/ReviewAvg';
import StartDate from '../FormElements/StartDate';
import Title from '../FormElements/Title';
import Website from '../FormElements/Website';

export default class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ASIN:         '',
      firstName:    '',
      lastName:     '',
      email:        '',
      authorBio:    '',
      startDate:    '',
      endDate:      '',
      title:        '',
      amazonURL:    '',
      description:  '',
      // cover:        '',
      numReviews:   '',
      reviewAvg:    '',
      regPrice:     '',
      currentPrice: '',
      genre:        '',
      website:      '',
      pressRelease: '',
      error: ''
    };

    this.onASINChange = this.onASINChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onAuthorBioChange = this.onAuthorBioChange.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    // this.onCoverChange = this.onCoverChange.bind(this);
    this.onNumReviewsChange = this.onNumReviewsChange.bind(this);
    this.onReviewAvgChange = this.onReviewAvgChange.bind(this);
    this.onRegPriceChange = this.onRegPriceChange.bind(this);
    this.onCurrentPriceChange = this.onCurrentPriceChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onWebsiteChange = this.onWebsiteChange.bind(this);
    this.onPressReleaseChange = this.onPressReleaseChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onASINChange(e) {
    const ASIN = e.target.value.toUpperCase();
    if (ASIN.match(/^[0-9A-Z]{0,10}$/)) {
      this.setState(() => ({ ASIN }));
    }
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

  onAuthorBioChange(e) {
    const authorBio = e.target.value;
    this.setState(() => ({ authorBio }));
  };

  onStartDateChange(e) {
    const startDate = e.target.value;
    this.setState(() => ({ startDate }));
  };

  onEndDateChange(e) {
    const endDate = e.target.value;
    this.setState(() => ({ endDate }));
  };

  onTitleChange(e) {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onAmazonURLChange(e) {
    const amazonURL = e.target.value;
    this.setState(() => ({ amazonURL }));
  };

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  // onCoverChange(e) {
  //   const cover = e.target.value;
  //   this.setState(() => ({ cover }));
  // };

  onNumReviewsChange(e) {
    const numReviews = e.target.value;
    this.setState(() => ({ numReviews }));
  };

  onReviewAvgChange(e) {
    const reviewAvg = e.target.value;
    if (!reviewAvg || reviewAvg.match(/^[0-5](\.\d{0,1})?$/)) {   
      this.setState(() => ({ reviewAvg }));
    }
  };

  onRegPriceChange(e) {
    const regPrice = e.target.value;
    if (!regPrice || regPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ regPrice }));
    }
  };

  onCurrentPriceChange(e) {
    const currentPrice = e.target.value;
    if (!currentPrice || currentPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ currentPrice }));
    }
  };

  onGenreChange(e) {
    const genre = e.target.value;
    this.setState(() => ({ genre }));
  };

  onWebsiteChange(e) {
    const website = e.target.value;
    this.setState(() => ({ website }));
  };

  onPressReleaseChange(e) {
    const pressRelease = e.target.value;
    this.setState(() => ({ pressRelease }));
  };

  onSubmit(e) {
    e.preventDefault();
    if (
      !this.state.ASIN ||
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.authorBio ||
      !this.state.startDate ||
      !this.state.endDate ||
      !this.state.title ||
      !this.state.amazonURL ||
      !this.state.description ||
      !this.state.numReviews ||
      !this.state.regPrice ||
      !this.state.currentPrice ||
      !this.state.genre ||
      !this.state.pressRelease
    ) {
      this.setState(() => ({ error: 'Please fill in all required fields.'}));
    } else if (!this.state.ASIN.match(/^[0-9A-Z]{10}$/)) {
      this.setState(() => ({ error: 'Please provide a valid ASIN.' }))
    } else if (!this.state.email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      this.setState(() => ({ error: 'Please provide a valid email address.' }));    
    } else if (!this.state.amazonURL.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
      // currently accepts any valid URL
      this.setState(() => ({ error: 'Please provide a valid Amazon URL.' }));
    } else if (!this.state.reviewAvg || parseInt(this.state.reviewAvg) > 5) { 
      this.setState(() => ({ error: 'Please provide a Review Avg of 5 or less.' }));      
    } else if (!this.state.website || !this.state.website.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
      this.setState(() => ({ error: 'Please provide a valid website URL.' }));
    } else {
      this.setState(() => ({ error: '' }));      
      console.log(this.state);
      alert('See console for state. (Ctrl + Shift + i, and then click Console tab)');
    }
  }

  render() {
    return (
      <div>
        <h4>Promotion Submitter</h4>
        <form className="form-layout" onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <ASIN value={this.state.ASIN} onChange={this.onASINChange} />
          <FirstName value={this.state.firstName} onChange={this.onFirstNameChange} />
          <LastName value={this.state.lastName} onChange={this.onLastNameChange} />
          <Email value={this.state.email} onChange={this.onEmailChange} />
          <AuthorBio value={this.state.authorBio} onChange={this.onAuthorBioChange} />
          <StartDate value={this.state.startDate} onChange={this.onStartDateChange} />
          <EndDate value={this.state.endDate} onChange={this.onEndDateChange} />
          <Title value={this.state.title} onChange={this.onTitleChange} />
          <AmazonURL value={this.state.amazonURL} onChange={this.onAmazonURLChange} />
          <Description value={this.state.description} onChange={this.onDescriptionChange} />
          {/* <Cover value={this.state.cover} onChange={this.onCoverChange} /> */}
          <NumReviews value={this.state.numReviews} onChange={this.onNumReviewsChange} />
          <ReviewAvg value={this.state.reviewAvg} onChange={this.onReviewAvgChange} />
          <RegPrice value={this.state.regPrice} onChange={this.onRegPriceChange} />
          <CurrentPrice value={this.state.currentPrice} onChange={this.onCurrentPriceChange} />
          <Genre value={this.state.genre} onChange={this.onGenreChange} />
          <Website value={this.state.website} onChange={this.onWebsiteChange} />
          <PressRelease value={this.state.pressRelease} onChange={this.onPressReleaseChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};
