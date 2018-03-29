import React, { Component } from 'react';
import { 
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  Label
} from 'reactstrap';

import AmazonURL from '../../FormElements/AmazonURL';
import FictionOrNonFiction from '../../FormElements/FictionOrNonFiction';
import Genre from '../../FormElements/Genre';
import SubGenre from '../../FormElements/SubGenre';
import Email from '../../FormElements/Email';

const PressReleasePage1 = ({
  error,
  onSubmit,
  
  amazonURL,
  onAmazonURLChange,

  fictionOrNonFiction,
  onFictionOrNonFictionChange,

  genre,
  onGenreChange,
  isGenreDisabled,

  subGenre,
  onSubGenreChange,

  firstName,
  onFirstNameChange,

  lastName,
  onLastNameChange,

  email,
  onEmailChange,
}) => (
  <Card className="animated fadeIn">
    <CardHeader>
      <h4><strong>Press Release - 1 of 3</strong></h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmit}>
        <AmazonURL
          value={amazonURL}
          onChange={onAmazonURLChange}
        />
        <FictionOrNonFiction
          value={fictionOrNonFiction}
          onChange={onFictionOrNonFictionChange}
        />
        <Genre
          value={genre}
          onChange={onGenreChange}
          isGenreDisabled={isGenreDisabled}
        />
        <SubGenre
          value={subGenre}
          onChange={onSubGenreChange}
        />
        <Email
          value={email}
          onChange={onEmailChange}
        />
        {error && <p>{error}</p>}        
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