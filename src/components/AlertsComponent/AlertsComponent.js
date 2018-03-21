import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';

import AlertsPage1 from "./AlertsPages/AlertsPage1";
import AlertsPage2 from "./AlertsPages/AlertsPage2";
import AlertsPage3 from "./AlertsPages/AlertsPage3";

const AlertsComponent = ({
  // Variables
  currentPage,
  error,

  // AlertsPage1
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
  
  // AlertsPage2
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,
  
  // AlertsPage3
  description,
  authorBio,

  // Methods
  onBack,

  // AlertsPage1
  onTitleChange,
  onAsinChange,
  onAmazonURLChange,
  onIsFictionChange,
  onGenreChange,
  onSubGenreChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmitAlertsPage1,
  
  // AlertsPage2
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitAlertsPage2,
  
  // AlertsPage3
  onDescriptionChange,
  onAuthorBioChange,
  onSubmitAlertsPage3,
}) => (
  <Row>
    <Col sm="3" />
    <Col xs="12" sm="6">
      {
        currentPage === "AlertsPage1" && (
          <AlertsPage1
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
            onSubmit={onSubmitAlertsPage1}
          />
        )
      }
      {
        currentPage === "AlertsPage2" && (
          <AlertsPage2
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
            onSubmit={onSubmitAlertsPage2}
          />
        )
      }
        {currentPage === "AlertsPage3" && (
          <AlertsPage3
          error={error}
          description={description}
          authorBio={authorBio}
          
          onDescriptionChange={onDescriptionChange}
          onAuthorBioChange={onAuthorBioChange}
          onBack={onBack}
          onSubmit={onSubmitAlertsPage3}
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

export default AlertsComponent;