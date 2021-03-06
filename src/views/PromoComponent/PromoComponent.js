import React from 'react';
import { Col, Row } from 'reactstrap';

import PromoPage1 from './PromoPages/PromoPage1';
import PromoPage2 from './PromoPages/PromoPage2';
import PromoPage3 from './PromoPages/PromoPage3';
import PromoSuccess from './PromoPages/PromoSuccess';

const PromoComponent = ({
  // Variables
  currentPage,
  error,

  // PromoPage1
  amazonUrl,
  nonFictionOrFiction,
  genre,
  subGenre,
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
  onAmazonUrlChange,
  onNonFictionOrFictionChange,
  onGenreChange,
  onSubGenreChange,
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
  onSubmitPromoPage3
}) => (
  <Row>
    <Col xs="12" sm={{ size: 8, offset: 2 }}>
      {currentPage === 'PromoPage1' && (
        <PromoPage1
          error={error}
          amazonUrl={amazonUrl}
          nonFictionOrFiction={nonFictionOrFiction}
          genre={genre}
          subGenre={subGenre}
          email={email}
          onAmazonUrlChange={onAmazonUrlChange}
          onNonFictionOrFictionChange={onNonFictionOrFictionChange}
          onGenreChange={onGenreChange}
          onSubGenreChange={onSubGenreChange}
          onEmailChange={onEmailChange}
          onSubmit={onSubmitPromoPage1}
        />
      )}
      {currentPage === 'PromoPage2' && (
        <PromoPage2
          error={error}
          price={price}
          promoType={promoType}
          startDate={startDate}
          endDate={endDate}
          calendarFocus={calendarFocus}
          onPriceChange={onPriceChange}
          onPromoTypeChange={onPromoTypeChange}
          onDatesChange={onDatesChange}
          onFocusChange={onFocusChange}
          onBack={onBack}
          onSubmit={onSubmitPromoPage2}
        />
      )}
      {currentPage === 'PromoPage3' && (
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
      {currentPage === 'SubmissionSuccess' && (
        <PromoSuccess feature="Book Promotion" />
      )}
    </Col>
  </Row>
);

export default PromoComponent;
