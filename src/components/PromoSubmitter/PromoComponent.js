import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import BookDetailsOne from "../../components/PromoSubmitter/PromoPages/BookDetailsOne";
import BookDetailsTwo from "../../components/PromoSubmitter/PromoPages/BookDetailsTwo";
import BookDetailsThree from "../../components/PromoSubmitter/PromoPages/BookDetailsThree";

const PromoComponent = ({
  // Variables
  currentPage,
  error,

  // BookDetailsOne
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
  
  // BookDetailsTwo
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,
  
  // BookDetailsThree
  description,
  authorBio,

  // Methods
  onBack,

  // BookDetailsOne
  onTitleChange,
  onAsinChange,
  onAmazonURLChange,
  onIsFictionChange,
  onGenreChange,
  onSubGenreChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmitBookDetailsOne,
  
  // BookDetailsTwo
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitBookDetailsTwo,
  
  // BookDetailsThree
  onDescriptionChange,
  onAuthorBioChange,
  onSubmitBookDetailsThree,
}) => (
  <Row>
    <Col sm="3" />
    <Col xs="12" sm="6">
      {
        currentPage === "BookDetailsOne" && (
          <BookDetailsOne
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
            onSubmit={onSubmitBookDetailsOne}
          />
        )
      }
      {
        currentPage === "BookDetailsTwo" && (
          <BookDetailsTwo
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
            onSubmit={onSubmitBookDetailsTwo}
          />
        )
      }
        {currentPage === "BookDetailsThree" && (
          <BookDetailsThree
          error={error}
          description={description}
          authorBio={authorBio}
          
          onDescriptionChange={onDescriptionChange}
          onAuthorBioChange={onAuthorBioChange}
          onBack={onBack}
          onSubmit={onSubmitBookDetailsThree}
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