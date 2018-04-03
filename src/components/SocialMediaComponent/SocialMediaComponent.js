import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';

import SocialMediaPage1 from "./SocialMediaPages/SocialMediaPage1";
import SocialMediaPage2 from "./SocialMediaPages/SocialMediaPage2";
import SocialMediaPage3 from "./SocialMediaPages/SocialMediaPage3";
import SocialMediaSuccess from './SocialMediaPages/SocialMediaSuccess';

const SocialMediaComponent = ({
  // Variables
  currentPage,
  error,

  // SocialMediaPage1
  amazonUrl,
  fictionOrNonFiction,
  genre,
  subGenre,
  email,

  // SocialMediaPage2
  regPrice,
  salePrice,
  startDate,
  endDate,
  calendarFocus,

  // SocialMediaPage3
  keywords,
  tweet,
  facebook,
  notes,

  // Methods
  onBack,

  // SocialMediaPage1
  onAmazonUrlChange,
  onFictionOrNonFictionChange,
  onGenreChange,
  onSubGenreChange,
  onEmailChange,
  onSubmitSocialMediaPage1,

  // SocialMediaPage2
  onRegPriceChange,
  onSalePriceChange,
  onDatesChange,
  onFocusChange,
  onSubmitSocialMediaPage2,

  // SocialMediaPage3
  onKeywordsChange,
  onTweetChange,
  onFacebookChange,
  onNotesChange,
  onSubmitSocialMediaPage3,
}) => (
    <Row>
      <Col xs="12" sm={{ size: 8, offset: 2 }}>
        {
          currentPage === "SocialMediaPage1" && (
            <SocialMediaPage1
              error={error}
              amazonUrl={amazonUrl}
              fictionOrNonFiction={fictionOrNonFiction}
              genre={genre}
              subGenre={subGenre}
              email={email}

              onAmazonUrlChange={onAmazonUrlChange}
              onFictionOrNonFictionChange={onFictionOrNonFictionChange}
              onGenreChange={onGenreChange}
              onSubGenreChange={onSubGenreChange}
              onEmailChange={onEmailChange}
              onSubmit={onSubmitSocialMediaPage1}
            />
          )
        }
        {
          currentPage === "SocialMediaPage2" && (
            <SocialMediaPage2
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
              onSubmit={onSubmitSocialMediaPage2}
            />
          )
        }
        {currentPage === "SocialMediaPage3" && (
          <SocialMediaPage3
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
            onSubmit={onSubmitSocialMediaPage3}
          />
        )}
        {currentPage === "SubmissionSuccess" && (
          <SocialMediaSuccess feature="social media submission" />
        )}
      </Col>
    </Row>
  );

export default SocialMediaComponent;