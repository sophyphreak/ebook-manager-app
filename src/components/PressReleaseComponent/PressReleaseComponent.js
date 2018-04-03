import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';

import PressReleasePage1 from "./PressReleasePages/PressReleasePage1";
import PressReleasePage2 from "./PressReleasePages/PressReleasePage2";
import PressReleasePage3 from "./PressReleasePages/PressReleasePage3";
import PressReleaseSuccess from './PressReleasePages/PressReleaseSuccess';

const PressReleaseComponent = ({
  // Variables
  currentPage,
  error,

  // PressReleasePage1
  amazonUrl,
  fictionOrNonFiction,
  genre,
  subGenre,
  email,
  
  // PressReleasePage2
  price,
  promoType,
  startDate,
  endDate,
  calendarFocus,
  
  // PressReleasePage3
  website,
  keywords,
  releaseText,

  // Methods
  onBack,

  // PressReleasePage1
  onAmazonUrlChange,
  onFictionOrNonFictionChange,
  onGenreChange,
  onSubGenreChange,
  onEmailChange,
  onSubmitPressReleasePage1,
  
  // PressReleasePage2
  onPriceChange,
  onPromoTypeChange,
  onDatesChange,
  onFocusChange,
  onSubmitPressReleasePage2,
  
  // PressReleasePage3
  onWebsiteChange,
  onKeywordsChange,
  onReleaseTextChange,
  onSubmitPressReleasePage3,

}) => (
  <Row>
    <Col xs="12" sm={{ size: 8, offset: 2 }}>
      {
        currentPage === "PressReleasePage1" && (
          <PressReleasePage1
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
          website={website}
          keywords={keywords}
          releaseText={releaseText}

          onWebsiteChange={onWebsiteChange}
          onKeywordsChange={onKeywordsChange}
          onReleaseTextChange={onReleaseTextChange}
          onBack={onBack}
          onSubmit={onSubmitPressReleasePage3}
        />
      )}
      {currentPage === "SubmissionSuccess" && (
        <PressReleaseSuccess feature="press release" />
      )}
    </Col>
  </Row>
);

export default PressReleaseComponent;