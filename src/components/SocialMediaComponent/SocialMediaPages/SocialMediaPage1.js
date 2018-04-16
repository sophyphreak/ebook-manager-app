import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Form, Label } from 'reactstrap';

import AmazonUrl from '../../FormElements/AmazonUrl';
import NonFictionOrFiction from '../../FormElements/NonFictionOrFiction';
import Genre from '../../FormElements/Genre';
import SubGenre from '../../FormElements/SubGenre';
import Email from '../../FormElements/Email';

const SocialMediaPage1 = ({
  error,
  onSubmit,

  amazonUrl,
  onAmazonUrlChange,

  nonFictionOrFiction,
  onNonFictionOrFictionChange,

  genre,
  onGenreChange,

  subGenre,
  onSubGenreChange,

  email,
  onEmailChange
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4>
        <strong>Social Media Submission - 1 of 3</strong>
      </h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmit}>
        <AmazonUrl
          label="Amazon URL*"
          value={amazonUrl}
          onChange={onAmazonUrlChange}
          hasError={!!error.message}
          errorMessage={error.amazonUrl}
        />
        <NonFictionOrFiction
          nonFictionOrFiction={nonFictionOrFiction}
          onNonFictionOrFictionChange={onNonFictionOrFictionChange}
        />
        {nonFictionOrFiction === 'Fiction' && (
          <div className="animated fadeIn">
            <Genre
              label="Genre:*"
              value={genre}
              onChange={onGenreChange}
              hasError={!!error.message}
              errorMessage={error.genre}
            />
          </div>
        )}
        <SubGenre
          label="SubGenre:"
          subGenre={subGenre}
          onSubGenreChange={onSubGenreChange}
          hasError={!!error.message}
          errorMessage={error.subGenre}
        />
        <Email
          label="Email:*"
          email={email}
          onEmailChange={onEmailChange}
          hasError={!!error.message}
          errorMessage={error.email}
        />
        {error.message && <p>{error.message}</p>}
        <Button type="submit" size="sm" color="primary" value="Submit">
          Next Section
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default SocialMediaPage1;
