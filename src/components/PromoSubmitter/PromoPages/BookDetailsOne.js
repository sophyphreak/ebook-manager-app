import React, { Component } from 'react';
import { 
  Button,
  Form
} from 'reactstrap';

import Title from '../../FormElements/Title';
import ASIN from '../../FormElements/ASIN';
import AmazonURL from '../../FormElements/AmazonURL';
import RegPrice from '../../FormElements/RegPrice';
import IsFiction from '../../FormElements/IsFiction';
import Genre from '../../FormElements/Genre';
import SubGenre from '../../FormElements/SubGenre';
import FirstName from '../../FormElements/FirstName';
import LastName from '../../FormElements/LastName';
import Email from '../../FormElements/Email';

const BookDetailsOne = ({
  error,
  onSubmit,
  
  title,
  onTitleChange,

  asin,
  onAsinChange,

  amazonURL,
  onAmazonURLChange,

  regPrice,
  onRegPriceChange,

  isFiction,
  onIsFictionChange,

  genre,
  onGenreChange,

  subGenre,
  onSubGenreChange,

  firstName,
  onFirstNameChange,

  lastName,
  onLastNameChange,

  email,
  onEmailChange,
}) => (
  <Form className="animated fadeIn" onSubmit={onSubmit}>
    <h4><strong>Book Details</strong></h4>
    {error && <p>{error}</p>}    
    <Title
      value={title}
      onChange={onTitleChange}
    />
    <ASIN
      value={asin}
      onChange={onAsinChange}
    />
    <AmazonURL
      value={amazonURL}
      onChange={onAmazonURLChange}
    />
    <RegPrice
      value={regPrice}
      onChange={onRegPriceChange}
    />
    <IsFiction
      value={isFiction}
      onChange={onIsFictionChange}
    />
    <Genre
      value={genre}
      onChange={onGenreChange}
    />
    <SubGenre
      value={subGenre}
      onChange={onSubGenreChange}
    />
    <FirstName
      value={firstName}
      onChange={onFirstNameChange}
    />
    <LastName
      value={lastName}
      onChange={onLastNameChange}
    />
    <Email
      value={email}
      onChange={onEmailChange}
    />
    <Button 
      type="submit" 
      size="sm" 
      color="primary" 
      value="Submit" 
    >
      <i className="fa fa-dot-circle-o" /> 
      Submit
    </Button>    
  </Form>
);

export default BookDetailsOne;