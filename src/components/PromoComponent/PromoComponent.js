import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import PromoPage1 from "./PromoPages/PromoPage1";
import PromoPage2 from "./PromoPages/PromoPage2";
import PromoPage3 from "./PromoPages/PromoPage3";

const PromoComponent = ({
  // Variables
  currentPage,
  error,

  // PromoPage1
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
  
  // PromoPage2
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,
  
  // PromoPage3
  description,
  authorBio,

  // Methods
  onBack,

  // PromoPage1
  onTitleChange,
  onAsinChange,
  onAmazonURLChange,
  onIsFictionChange,
  onGenreChange,
  onSubGenreChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmitPromoPage1,
  
  // PromoPage2
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitPromoPage2,
  
  // PromoPage3
  onDescriptionChange,
  onAuthorBioChange,
  onSubmitPromoPage3,
}) => (
  <Row>
    <Col sm="2" />
    <Col xs="12" sm="8">
      {
        currentPage === "PromoPage1" && (
          <PromoPage1
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
            onSubmit={onSubmitPromoPage1}
          />
        )
      }
      {
        currentPage === "PromoPage2" && (
          <PromoPage2
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
            onSubmit={onSubmitPromoPage2}
          />
        )
      }
        {currentPage === "PromoPage3" && (
          <PromoPage3
          error={error}
          description={description}
          authorBio={authorBio}
          
          onDescriptionChange={onDescriptionChange}
          onAuthorBioChange={onAuthorBioChange}
          onBack={onBack}
          onSubmit={onSubmitPromoPage3}
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

export default PromoComponent;