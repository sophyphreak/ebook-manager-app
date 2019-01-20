import React from 'react';
import { Col, Row } from 'reactstrap';

import MediaPage1 from './MediaPages/MediaPage1';
import MediaPage2 from './MediaPages/MediaPage2';
import MediaPage3 from './MediaPages/MediaPage3';
import MediaSuccess from './MediaPages/MediaSuccess';

const MediaView = ({
  // Variables
  currentPage,
  error,

  // MediaPage1
  amazonUrl,
  nonFictionOrFiction,
  genre,
  subGenre,
  email,

  // MediaPage2
  regPrice,
  salePrice,
  startDate,
  endDate,
  calendarFocus,

  // MediaPage3
  keywords,
  tweet,
  facebook,
  notes,

  // Methods
  onBack,

  // MediaPage1
  onAmazonUrlChange,
  onNonFictionOrFictionChange,
  onGenreChange,
  onSubGenreChange,
  onEmailChange,
  onSubmitMediaPage1,

  // MediaPage2
  onRegPriceChange,
  onSalePriceChange,
  onDatesChange,
  onFocusChange,
  onSubmitMediaPage2,

  // MediaPage3
  onKeywordsChange,
  onTweetChange,
  onFacebookChange,
  onNotesChange,
  onSubmitMediaPage3
}) => (
  <Row>
    <Col xs="12" sm={{ size: 8, offset: 2 }}>
      {currentPage === 'MediaPage1' && (
        <MediaPage1
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
          onSubmit={onSubmitMediaPage1}
        />
      )}
      {currentPage === 'MediaPage2' && (
        <MediaPage2
          error={error}
          regPrice={regPrice}
          salePrice={salePrice}
          startDate={startDate}
          endDate={endDate}
          focusedInput={calendarFocus}
          onRegPriceChange={onRegPriceChange}
          onSalePriceChange={onSalePriceChange}
          onDatesChange={onDatesChange}
          onFocusChange={onFocusChange}
          onBack={onBack}
          onSubmit={onSubmitMediaPage2}
        />
      )}
      {currentPage === 'MediaPage3' && (
        <MediaPage3
          error={error}
          keywords={keywords}
          tweet={tweet}
          facebook={facebook}
          notes={notes}
          onKeywordsChange={onKeywordsChange}
          onTweetChange={onTweetChange}
          onFacebookChange={onFacebookChange}
          onNotesChange={onNotesChange}
          onBack={onBack}
          onSubmit={onSubmitMediaPage3}
        />
      )}
      {currentPage === 'SubmissionSuccess' && (
        <MediaSuccess feature="social media submission" />
      )}
    </Col>
  </Row>
);

export default MediaView;
