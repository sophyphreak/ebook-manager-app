import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import SocialMediaPage1 from "./SocialMediaPages/SocialMediaPage1";
import SocialMediaPage2 from "./SocialMediaPages/SocialMediaPage2";
import SocialMediaPage3 from "./SocialMediaPages/SocialMediaPage3";

const SocialMediaComponent = ({
  // Variables
  currentPage,
  error,

  // SocialMediaPage1
  title,
  asin,
  amazonURL,
  isFiction,
  genre,
  isGenreDisabled,
  subGenre,
  firstName,
  lastName,
  email,
  
  // SocialMediaPage2
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,
  
  // SocialMediaPage3
  description,
  authorBio,

  // Methods
  onBack,

  // SocialMediaPage1
  onTitleChange,
  onAsinChange,
  onAmazonURLChange,
  onIsFictionChange,
  onGenreChange,
  onSubGenreChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmitSocialMediaPage1,
  
  // SocialMediaPage2
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitSocialMediaPage2,
  
  // SocialMediaPage3
  onDescriptionChange,
  onAuthorBioChange,
  onSubmitSocialMediaPage3,
}) => (
  <Row>
    <Col sm="3" />
    <Col xs="12" sm="6">
      {
        currentPage === "SocialMediaPage1" && (
          <SocialMediaPage1
            error={error}
            title={title}
            asin={asin}
            amazonURL={amazonURL}
            isFiction={isFiction}
            genre={genre}
            isGenreDisabled={isGenreDisabled}
            subGenre={subGenre}
            firstName={firstName}
            lastName={lastName}
            email={email}
            
            onTitleChange={onTitleChange}
            onAsinChange={onAsinChange}
            onAmazonURLChange={onAmazonURLChange}
            onIsFictionChange={onIsFictionChange}
            onGenreChange={onGenreChange}
            onSubGenreChange={onSubGenreChange}
            onFirstNameChange={onFirstNameChange}
            onLastNameChange={onLastNameChange}
            onEmailChange={onEmailChange}
            onSubmit={onSubmitSocialMediaPage1}
          />
        )
      }
      {
        currentPage === "SocialMediaPage2" && (
          <SocialMediaPage2
            error={error}
            price={price}
            promoType={promoType}
            startDate={startDate}
            endDate={endDate}
            focusedInput={calendarFocus}
            
            onPriceChange={onPriceChange}
            onPromoTypeChange={onPromoTypeChange}
            onDatesChange={onDatesChange}
            onFocusChange={onFocusChange}
            onBack={onBack}
            onSubmit={onSubmitSocialMediaPage2}
          />
        )
      }
        {currentPage === "SocialMediaPage3" && (
          <SocialMediaPage3
          error={error}
          description={description}
          authorBio={authorBio}
          
          onDescriptionChange={onDescriptionChange}
          onAuthorBioChange={onAuthorBioChange}
          onBack={onBack}
          onSubmit={onSubmitSocialMediaPage3}
        />
      )}
      {currentPage === "SubmissionSuccess" && (
        <p className="animated fadeIn">
          Your Promo Submission has been submitted. Please wait for a
          confirmation email.
        </p>
      )}
    </Col>
  </Row>
);

export default SocialMediaComponent;