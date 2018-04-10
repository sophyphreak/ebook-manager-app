import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form
} from 'reactstrap';

import Keywords from '../../FormElements/Keywords';
import Tweet from '../../FormElements/Tweet';
import Facebook from '../../FormElements/Facebook';
import Notes from '../../FormElements/Notes';

const SocialMediaPage3 = ({
  error,
  onBack,
  onSubmit,

  keywords,
  onKeywordsChange,

  tweet,
  onTweetChange,

  facebook,
  onFacebookChange,

  notes,
  onNotesChange
}) => (
    <Card className="animated fadeIn">
      <CardHeader>
        <h4><strong>Social Media Submission - 3 of 3</strong></h4>
      </CardHeader>
      <CardBody>
        <p>
          If you have a specific tweet, social media post, important info 
          or hashtags to use, please include them below. Otherwise we 
          will create a post based on the information provided. 
        </p>
        <Form onSubmit={onSubmit}>
          <Keywords
            label="Keywords / Hashtags (Comma Separated)"
            keywords={keywords}
            onKeywordsChange={onKeywordsChange}
            hasError={!!error.message}
            errorMessage={error.keywords}
          />
          <Tweet
            label="Tweet (280 characters max including hashtags)"
            tweet={tweet}
            onTweetChange={onTweetChange}
            hasError={!!error.message}
            errorMessage={error.tweet}
          />
          <Facebook
            label="Facebook / Other social media (2,000 characters max)"
            facebook={facebook}
            onFacebookChange={onFacebookChange}
            hasError={!!error.message}
            errorMessage={error.facebook}
          />
          <Notes
            label="Notes"
            notes={notes}
            onNotesChange={onNotesChange}
            hasError={!!error.message}
            errorMessage={error.notes}
          />
          {error.message && <p>{error.message}</p>}
          <Button
            className=".back-button"
            onClick={onBack}
            size="sm"
            color="basic"
          >
            Go Back
          </Button>
          <Button
            type="submit"
            size="sm"
            color="primary"
            value="Submit"
          >
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );

export default SocialMediaPage3;