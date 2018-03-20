import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form
} from 'reactstrap';

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
        <h4><strong>Book Promo - 3 of 3</strong></h4>
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <Description
            value={description}
            onChange={onDescriptionChange}
          />
          <AuthorBio
            value={authorBio}
            onChange={onAuthorBioChange}
          />
          {error && <p>{error}</p>}
          <Button
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
            Next Section
          </Button>
        </Form>
      </CardBody>
    </Card>
  );

export default PromoPage3;