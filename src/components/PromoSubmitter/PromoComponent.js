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
import SiteSelection from "../../components/PromoSubmitter/PromoPages/SiteSelection";
import DateSelection from "../../components/PromoSubmitter/PromoPages/DateSelection";

const PromoComponent = ({
  // Variables
  currentPage,
  error,

  // BookDetailsOne
  title,
  asin,
  amazonURL,
  regPrice,
  isFiction,
  genre,
  subGenre,
  firstName,
  lastName,
  email,

  // BookDetailsTwo
  description,
  authorBio,

  // SiteSelection
  promoType,
  promoSites,

  // DateSelection
  startDate,
  endDate,
  calendarFocus,

  // Methods
  onClickBack,

  // BookDetailsOne
  onTitleChange,
  onAsinChange,
  onAmazonURLChange,
  onRegPriceChange,
  onIsFictionChange,
  onGenreChange,
  onSubGenreChange,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onSubmitBookDetailsOne,

  // BookDetailsTwo
  onDescriptionChange,
  onAuthorBioChange,
  onSubmitBookDetailsTwo,

  // SiteSelection
  onPromoTypeChange,
  onPromoSitesChange,
  onSubmitSiteSelection,

  // DateSelection
  onDatesChange,
  onFocusChange,
  onSubmitDateSelection
}) => (
  <Row>
    <Col sm="3" />
    <Col xs="12" sm="6">
      <Card>
        <CardHeader>
          <strong>Promotion Submitter</strong>
        </CardHeader>
        <CardBody>
          {currentPage === "BookDetailsOne" && (
            <BookDetailsOne
              error={error}
              title={title}
              asin={asin}
              regPrice={regPrice}
              amazonURL={amazonURL}
              isFiction={isFiction}
              genre={genre}
              subGenre={subGenre}
              firstName={firstName}
              lastName={lastName}
              email={email}

              onTitleChange={onTitleChange}
              onAsinChange={onAsinChange}
              onAmazonURLChange={onAmazonURLChange}
              onRegPriceChange={onRegPriceChange}
              onIsFictionChange={onIsFictionChange}
              onGenreChange={onGenreChange}
              onSubGenreChange={onSubGenreChange}
              onFirstNameChange={onFirstNameChange}
              onLastNameChange={onLastNameChange}
              onEmailChange={onEmailChange}
              onSubmit={onSubmitBookDetailsOne}
            />
          )}
          {currentPage === "BookDetailsTwo" && (
            <BookDetailsTwo
              error={error}
              description={description}
              authorBio={authorBio}

              onDescriptionChange={onDescriptionChange}
              onAuthorBioChange={onAuthorBioChange}
              onClickBack={onClickBack}
              onSubmit={onSubmitBookDetailsTwo}
            />
          )}
          {currentPage === "SiteSelection" && (
            <SiteSelection
              error={error}
              promoType={promoType}
              promoSites={promoSites}
              
              onPromoTypeChange={onPromoTypeChange}
              onPromoSitesChange={onPromoSitesChange}
              onClickBack={onClickBack}
              onSubmit={onSubmitSiteSelection}
            />
          )}
          {currentPage === "DateSelection" && (
            <DateSelection
              startDate={startDate}
              endDate={endDate}
              focusedInput={calendarFocus}

              onDatesChange={onDatesChange}
              onFocusChange={onFocusChange}
              onClickBack={onClickBack}
              onSubmit={onSubmitDateSelection}
            />
          )}
          {currentPage === "SubmissionSuccess" && (
            <p className="animated fadeIn">
              Your Promo Submission has been submitted. Please wait for a
              confirmation email.
                </p>
          )}
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default PromoComponent;