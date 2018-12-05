import React from 'react';
import { Col, Row } from 'reactstrap';

import ReleasePage1 from './ReleasePages/ReleasePage1';
import ReleasePage2 from './ReleasePages/ReleasePage2';
import ReleasePage3 from './ReleasePages/ReleasePage3';
import ReleaseSuccess from './ReleasePages/ReleaseSuccess';

const ReleaseComponent = ({
  // Variables
  currentPage,
  error,

  // ReleasePage1
  amazonUrl,
  nonFictionOrFiction,
  genre,
  subGenre,
  email,

  // ReleasePage2
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,

  // ReleasePage3
  website,
  keywords,
  releaseText,

  // Methods
  onBack,

  // ReleasePage1
  onAmazonUrlChange,
  onNonFictionOrFictionChange,
  onGenreChange,
  onSubGenreChange,
  onEmailChange,
  onSubmitReleasePage1,

  // ReleasePage2
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitReleasePage2,

  // ReleasePage3
  onWebsiteChange,
  onKeywordsChange,
  onReleaseTextChange,
  onSubmitReleasePage3
}) => (
  <Row>
    <Col xs="12" sm={{ size: 8, offset: 2 }}>
      {currentPage === 'ReleasePage1' && (
        <ReleasePage1
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
          onSubmit={onSubmitReleasePage1}
        />
      )}
      {currentPage === 'ReleasePage2' && (
        <ReleasePage2
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
          onSubmit={onSubmitReleasePage2}
        />
      )}
      {currentPage === 'ReleasePage3' && (
        <ReleasePage3
          error={error}
          website={website}
          keywords={keywords}
          releaseText={releaseText}
          onWebsiteChange={onWebsiteChange}
          onKeywordsChange={onKeywordsChange}
          onReleaseTextChange={onReleaseTextChange}
          onBack={onBack}
          onSubmit={onSubmitReleasePage3}
        />
      )}
      {currentPage === 'SubmissionSuccess' && (
        <ReleaseSuccess feature="press release" />
      )}
    </Col>
  </Row>
);

export default ReleaseComponent;
