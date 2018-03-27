import React, { Component } from 'react';
import { 
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  Label
} from 'reactstrap';

import Title from '../../FormElements/Title';
import ASIN from '../../FormElements/ASIN';
import AmazonURL from '../../FormElements/AmazonURL';
import FictionOrNonFiction from '../../FormElements/FictionOrNonFiction';
import Genre from '../../FormElements/Genre';
import SubGenre from '../../FormElements/SubGenre';
import FirstName from '../../FormElements/FirstName';
import LastName from '../../FormElements/LastName';
import Email from '../../FormElements/Email';

const PromoPage1 = ({
  error,
  onSubmit,
  
  title,
  onTitleChange,

  asin,
  onAsinChange,

  amazonURL,
  onAmazonURLChange,

  fictionOrNonFiction,
  onFictionOrNonFictionChange,

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
  <Card className="animated fadeIn">
    <CardHeader>
      <h4><strong>Book Promo - 1 of 3</strong></h4>
    </CardHeader>
    <CardBody>
      <Form onSubmit={onSubmit}>
        <Title
          value={title}
          onChange={onTitleChange}
          hasError={!!error.message}
          errorMessage={error.title}
        />
        <ASIN
          value={asin}
          onChange={onAsinChange}
          hasError={!!error.message}
          errorMessage={error.asin}
        />
        <AmazonURL
          label="Amazon URL*"
          value={amazonURL}
          onChange={onAmazonURLChange}
          hasError={!!error.message}
          errorMessage={error.amazonURL}          
        />
        <FictionOrNonFiction
          value={fictionOrNonFiction}
          onChange={onFictionOrNonFictionChange}
          hasError={!!error.message}
          errorMessage={error.fictionOrNonFiction}                    
        />
        {
          fictionOrNonFiction === 'Fiction' && 
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
        <FirstName
          value={firstName}
          onChange={onFirstNameChange}
          hasError={!!error.message}
          errorMessage={error.firstName}                                        
        />
        <LastName
          value={lastName}
          onChange={onLastNameChange}
          hasError={!!error.message}
          errorMessage={error.lastName}                                                  
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

export default PromoPage1;