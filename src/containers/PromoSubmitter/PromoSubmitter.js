import React, { Component } from "react";
import moment from "moment";

import PromoComponent from '../../components/PromoComponent/PromoComponent';
import promoToNodemailer from './promoToNodemailer/promoToNodemailer';

export default class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "PromoPage1",
      error: {
        message: "",
        amazonURL: "",
        fictionOrNonFiction: "",
        genre: "",
        email: "",
        price: "",
        promoType: "",
        datePicker: "",
        description: "",
        authorBio: ""
      },

      // PromoPage1
      amazonURL: "",
      fictionOrNonFiction: "",
      genre: "",
      subGenre: "",
      email: "",
      
      // PromoPage2
      price: "",
      promoType: "",
      startDate: moment(),
      endDate: moment(),
      calendarFocus: null,
      
      // PromoPage3
      description: "",
      authorBio: ""
    };

    // PromoPage1
    this.onAmazonURLChange = this.onAmazonURLChange.bind(this);
    this.onFictionOrNonFictionChange = this.onFictionOrNonFictionChange.bind(this);
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

  onAmazonURLChange(e) {
    const amazonURL = e.target.value;
    this.setState(() => ({ amazonURL }));
  }

  onFictionOrNonFictionChange(e) {
    const fictionOrNonFiction = e.target.value;
    this.setState(() => ({ fictionOrNonFiction }));
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
    const {
      amazonURL,
      fictionOrNonFiction,
      genre,
      email
    } = this.state;
    let error = {
      message: "",
      amazonURL: "",
      fictionOrNonFiction: "",
      genre: "",
      email: ""
    };

    if (!amazonURL) {
      error.amazonURL = 'Please fill in an Amazon URL.';
    } else if (!amazonURL.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)) {
      error.amazonURL = 'Please provide a valid Amazon.com URL.';
    };
    if (!fictionOrNonFiction) {
      error.fictionOrNonFiction = 'this will not render to screen';
    };
    if (genre === 'Please select' && fictionOrNonFiction === 'Fiction') {
      error.genre = 'Please select a genre.';
    };
    if (!email) {
      error.email = 'Please enter an email.';
    } else if (!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
      error.email = 'Please provide a valid email address.';
    };
    if (
      error.amazonURL ||
      error.fictionOrNonFiction ||
      error.genre ||
      error.email
    ) {
      error.message = 'Please fix errors.'
      this.setState(() => ({ error }));
    };
    if (!error.message) {
      console.log(this.state);
      const currentPage = "PromoPage2";
      this.setState(() => ({ 
        error,
        currentPage
      }));
    };
  };

  // PromoPage2

  onPriceChange(e) {
    const price = e.target.value;
    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
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

      const currentPage = "PromoPage3";
      this.setState(() => ({ 
        error,
        currentPage
       }));
    }  
  };

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
    const { 
      description, 
      authorBio
    } = this.state;
    let error = {
      message: "",
      description: "",
      authorBio: ""
    };

    if (!description) {
      error.description = "Please enter a book description.";
    };
    if (!authorBio) {
      error.authorBio = "Please enter an author biography.";
    };
    if (
      error.description ||
      error.authorBio
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

      promoToNodemailer(this.state);
    }
  }

  onBack(e) {
    if (this.state.currentPage === "PromoPage2") {
      const currentPage = "PromoPage1";
      this.setState(() => ({ currentPage }));
    }
    if (this.state.currentPage === "PromoPage3") {
      const currentPage = "PromoPage2";
      this.setState(() => ({ currentPage }));
    }
  }

  render() {
    const {
      currentPage,
      error,
      title,
      asin,
      amazonURL,
      price,
      fictionOrNonFiction,
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
        amazonURL={amazonURL}
        fictionOrNonFiction={fictionOrNonFiction}
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
        onAmazonURLChange={this.onAmazonURLChange}
        onFictionOrNonFictionChange={this.onFictionOrNonFictionChange}
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
