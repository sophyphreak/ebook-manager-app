import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Form } from 'reactstrap';

import Description from '../../FormElements/Description';
import AuthorBio from '../../FormElements/AuthorBio';

const PromoPage3 = ({
  error,
  onBack,
  onSubmit,

  description,
  onDescriptionChange,

  authorBio,
  onAuthorBioChange
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4>
        <strong>Book Promo - 3 of 3</strong>
      </h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmit}>
        <Description
          label="Promotional Book Description (Max 2,000 characters)*"
          description={description}
          onDescriptionChange={onDescriptionChange}
          hasError={!!error.message}
          errorMessage={error.description}
        />
        <AuthorBio
          label="Author Biography:*"
          authorBio={authorBio}
          onAuthorBioChange={onAuthorBioChange}
          hasError={!!error.message}
          errorMessage={error.authorBio}
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
        <Button type="submit" size="sm" color="primary" value="Submit">
          Submit
        </Button>
      </Form>
    </CardBody>
  </Card>
);

export default PromoPage3;
