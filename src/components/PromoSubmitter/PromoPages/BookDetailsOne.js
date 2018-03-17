import React, { Component } from 'react';
import { 
  Button,
  CardFooter,
  Form,
  Label 
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

const BookDetailsOne = (props) => (
  <Form className="animated fadeIn" onSubmit={props.onSubmit}>
    <h4><strong>Book Details</strong></h4>
    {props.error && <p>{props.error}</p>}    
    <Title
      value={props.title}
      onChange={props.onTitleChange}
    />
    <ASIN
      value={props.ASIN}
      onChange={props.onASINChange}
    />
    <AmazonURL
      value={props.amazonURL}
      onChange={props.onAmazonURLChange}
    />
    <RegPrice
      value={props.regPrice}
      onChange={props.onRegPriceChange}
    />
    <IsFiction
      value={props.isFiction}
      onChange={props.onIsFictionChange}
    />
    <Genre
      value={props.genre}
      onChange={props.onGenreChange}
    />
    <SubGenre
      value={props.subGenre}
      onChange={props.onSubGenreChange}
    />
    <FirstName
      value={props.firstName}
      onChange={props.onFirstNameChange}
    />
    <LastName
      value={props.lastName}
      onChange={props.onLastNameChange}
    />
    <Email
      value={props.email}
      onChange={props.onEmailChange}
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