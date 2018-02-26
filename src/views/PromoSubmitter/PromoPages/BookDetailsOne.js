import React, { Component } from 'react';

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
  <form className="form-layout animated fadeIn" onSubmit={props.onSubmit}>
    <br/>
    <h5>Book Details</h5>
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
    <input type="submit" value="Submit" />    
  </form>
);

export default BookDetailsOne;