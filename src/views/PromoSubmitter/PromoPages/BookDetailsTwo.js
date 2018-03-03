import React, { Component } from 'react';

import Description from '../../FormElements/Description';
import AuthorBio from '../../FormElements/AuthorBio';
// import Cover from '../../FormElements/Cover';

const BookDetailsTwo = (props) => (
  <form className="form-layout animated fadeIn" onSubmit={props.onSubmit}>
    <br />
    <h5>Book Details</h5>
    {props.error && <p>{props.error}</p>}
    <Description
      value={props.description}
      onChange={props.onDescriptionChange}
    />
    <AuthorBio
      value={props.authorBio}
      onChange={props.onAuthorBioChange}
    />
    {/*<Cover
      value={props.cover}
      onChange={props.onCoverChange}
    />*/}
    <input type="submit" value="Submit" />
    <button onClick={props.onClickBack}>Back</button>
  </form>
);

export default BookDetailsTwo;