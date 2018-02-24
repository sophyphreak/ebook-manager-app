import React, { Component } from 'react';

import AmazonURL from '../FormElements/AmazonURL';
import ASIN from '../FormElements/ASIN';
import AuthorBio from '../FormElements/AuthorBio';
import Cover from '../FormElements/Cover';
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
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A mesage was submitted to nowhere: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>Promotion Submitter</h4>
        <form className="form-layout" onSubmit={this.handleSubmit}>
          <ASIN value={this.state.value} onChange={this.handleChange} />
          <FirstName value={this.state.value} onChange={this.handleChange} />
          <LastName value={this.state.value} onChange={this.handleChange} />
          <Email value={this.state.value} onChange={this.handleChange} />
          <AuthorBio value={this.state.value} onChange={this.handleChange} />
          <StartDate value={this.state.value} onChange={this.handleChange} />
          <EndDate value={this.state.value} onChange={this.handleChange} />
          <Title value={this.state.value} onChange={this.handleChange} />
          <AmazonURL value={this.state.value} onChange={this.handleChange} />
          <Description value={this.state.value} onChange={this.handleChange} />
          <Cover value={this.state.value} onChange={this.handleChange} />
          <NumReviews value={this.state.value} onChange={this.handleChange} />
          <ReviewAvg value={this.state.value} onChange={this.handleChange} />
          <RegPrice value={this.state.value} onChange={this.handleChange} />
          <CurrentPrice value={this.state.value} onChange={this.handleChange} />
          <Genre value={this.state.value} onChange={this.handleChange} />
          <Website value={this.state.value} onChange={this.handleChange} />
          <PressRelease value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};
