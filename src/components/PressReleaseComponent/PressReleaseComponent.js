import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import PressReleasePage1 from "./PressReleasePages/PressReleasePage1";
import PressReleasePage2 from "./PressReleasePages/PressReleasePage2";
import PressReleasePage3 from "./PressReleasePages/PressReleasePage3";

const PressReleaseComponent = ({
  // Variables
  currentPage,
  error,

  // PressReleasePage1
  title,
  asin,
  amazonURL,
  fictionOrNonFiction,
  genre,
  isGenreDisabled,
  subGenre,
  firstName,
  lastName,
  email,
  
  // PressReleasePage2
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,
  
  // PressReleasePage3
  description,
  authorBio,

  // Methods
  onBack,

  // PressReleasePage1
  onTitleChange,
  onAsinChange,
  onAmazonURLChange,
  onFictionOrNonFictionChange,
  onGenreChange,
  onSubGenreChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmitPressReleasePage1,
  
  // PressReleasePage2
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitPressReleasePage2,
  
  // PressReleasePage3
  onDescriptionChange,
  onAuthorBioChange,
  onSubmitPressReleasePage3,
}) => (
  <Row>
    <Col sm="3" />
    <Col xs="12" sm="6">
      {
        currentPage === "PressReleasePage1" && (
          <PressReleasePage1
            error={error}
            title={title}
            asin={asin}
            amazonURL={amazonURL}
            fictionOrNonFiction={fictionOrNonFiction}
            genre={genre}
            isGenreDisabled={isGenreDisabled}
            subGenre={subGenre}
            firstName={firstName}
            lastName={lastName}
            email={email}
            
            onTitleChange={onTitleChange}
            onAsinChange={onAsinChange}
            onAmazonURLChange={onAmazonURLChange}
            onFictionOrNonFictionChange={onFictionOrNonFictionChange}
            onGenreChange={onGenreChange}
            onSubGenreChange={onSubGenreChange}
            onFirstNameChange={onFirstNameChange}
            onLastNameChange={onLastNameChange}
            onEmailChange={onEmailChange}
            onSubmit={onSubmitPressReleasePage1}
          />
        )
      }
      {
        currentPage === "PressReleasePage2" && (
          <PressReleasePage2
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
            onSubmit={onSubmitPressReleasePage2}
          />
        )
      }
        {currentPage === "PressReleasePage3" && (
          <PressReleasePage3
          error={error}
          description={description}
          authorBio={authorBio}
          
          onDescriptionChange={onDescriptionChange}
          onAuthorBioChange={onAuthorBioChange}
          onBack={onBack}
          onSubmit={onSubmitPressReleasePage3}
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

export default PressReleaseComponent;