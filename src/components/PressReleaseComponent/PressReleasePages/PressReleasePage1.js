import React, { Component } from 'react';
import { 
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  Label
} from 'reactstrap';

import AmazonUrl from '../../FormElements/AmazonUrl';
import NonFictionOrFiction from '../../FormElements/NonFictionOrFiction';
import Genre from '../../FormElements/Genre';
import SubGenre from '../../FormElements/SubGenre';
import Email from '../../FormElements/Email';

const PressReleasePage1 = ({
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
  onEmailChange,
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4><strong>Press Release - 1 of 3</strong></h4>
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
          value={nonFictionOrFiction}
          onChange={onNonFictionOrFictionChange}
          hasError={!!error.messsage}
          errorMessage={error.nonFictionOrFiction}
        />
        {
          nonFictionOrFiction === 'Fiction' &&
          <div className="animated fadeIn">
            <Genre
              value={genre}
              onChange={onGenreChange}
              hasError={!!error.message}
              errorMessage={error.genre}
            />
          </div>
        }
        <SubGenre
          value={subGenre}
          onChange={onSubGenreChange}
          hasError={!!error.message}
          errorMessage={error.subGenre}
        />
        <Email
          label="Email:*"
          value={email}
          onChange={onEmailChange}
          hasError={!!error.message}
          errorMessage={error.email}
        />
        {error.message && <p>{error.message}</p>}        
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

export default PressReleasePage1;