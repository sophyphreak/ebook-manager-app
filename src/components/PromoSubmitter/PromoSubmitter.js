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
      FirstName:    '',
      LastName:     '',
      Email:        '',
      AuthorBio:    '',
      StartDate:    '',
      EndDate:      '',
      Title:        '',
      AmazonURL:    '',
      Description:  '',
      Cover:        '',
      NumReviews:   '',
      ReviewAvg:    '',
      RegPrice:     '',
      CurrentPrice: '',
      Genre:        '',
      Website:      '',
      PressRelease: ''
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onASINChange(e) {
    const ASIN = e.target.value;
    this.setState(() => ({ ASIN }));
  };
  
  onFirstNameChange(e) {
    const FirstName = e.target.value;
    this.setState(() => ({ FirstName }));
  };

  onLastNameChange(e) {
    const LastName = e.target.value;
    this.setState(() => ({ LastName }));
  };

  onEmailChange(e) {
    const Email = e.target.value;
    this.setState(() => ({ Email }));
  };

  onAuthorBioChange(e) {
    const AuthorBio = e.target.value;
    this.setState(() => ({ AuthorBio }));
  };

  onStartDateChange(e) {
    const StartDate = e.target.value;
    this.setState(() => ({ StartDate }));
  };

  onEndDateChange(e) {
    const EndDate = e.target.value;
    this.setState(() => ({ EndDate }));
  };

  onTitleChange(e) {
    const Title = e.target.value;
    this.setState(() => ({ Title }));
  };

  onAmazonURLChange(e) {
    const AmazonURL = e.target.value;
    this.setState(() => ({ AmazonURL }));
  };

  onDescriptionChange(e) {
    const Description = e.target.value;
    this.setState(() => ({ Description }));
  };

  // onCoverChange(e) {
  //   const Cover = e.target.value;
  //   this.setState(() => ({ Cover }));
  // };

  onNumReviewsChange(e) {
    const NumReviews = e.target.value;
    this.setState(() => ({ NumReviews }));
  };

  onReviewAvgChange(e) {
    const ReviewAvg = e.target.value;
    if (!ReviewAvg || ReviewAvg.match(/^[0-5](\.\d{0,1})?$/)) {   
      this.setState(() => ({ ReviewAvg }));
    }
  };

  onRegPriceChange(e) {
    const RegPrice = e.target.value;
    if (!RegPrice || RegPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ RegPrice }));
    }
  };

  onCurrentPriceChange(e) {
    const CurrentPrice = e.target.value;
    if (!CurrentPrice || CurrentPrice.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ CurrentPrice }));
    }
  };

  onGenreChange(e) {
    const Genre = e.target.value;
    this.setState(() => ({ Genre }));
  };

  onWebsiteChange(e) {
    const Website = e.target.value;
    this.setState(() => ({ Website }));
  };

  onPressReleaseChange(e) {
    const PressRelease = e.target.value;
    this.setState(() => ({ PressRelease }));
  };

  handleSubmit(event) {
    alert('See console for state. (Ctrl + Shift + i, and then click Console tab)');
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>Promotion Submitter</h4>
        <form className="form-layout" onSubmit={this.handleSubmit}>
          <ASIN value={this.state.ASIN} onChange={this.onASINChange} />
          <FirstName value={this.state.FirstName} onChange={this.onFirstNameChange} />
          <LastName value={this.state.LastName} onChange={this.onLastNameChange} />
          <Email value={this.state.Email} onChange={this.onEmailChange} />
          <AuthorBio value={this.state.AuthorBio} onChange={this.onAuthorBioChange} />
          <StartDate value={this.state.StartDate} onChange={this.onStartDateChange} />
          <EndDate value={this.state.EndDate} onChange={this.onEndDateChange} />
          <Title value={this.state.Title} onChange={this.onTitleChange} />
          <AmazonURL value={this.state.AmazonURL} onChange={this.onAmazonURLChange} />
          <Description value={this.state.Description} onChange={this.onDescriptionChange} />
          {/* <Cover value={this.state.Cover} onChange={this.onCoverChange} /> */}
          <NumReviews value={this.state.NumReviews} onChange={this.onNumReviewsChange} />
          <ReviewAvg value={this.state.ReviewAvg} onChange={this.onReviewAvgChange} />
          <RegPrice value={this.state.RegPrice} onChange={this.onRegPriceChange} />
          <CurrentPrice value={this.state.CurrentPrice} onChange={this.onCurrentPriceChange} />
          <Genre value={this.state.Genre} onChange={this.onGenreChange} />
          <Website value={this.state.Website} onChange={this.onWebsiteChange} />
          <PressRelease value={this.state.PressRelease} onChange={this.onPressReleaseChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};
