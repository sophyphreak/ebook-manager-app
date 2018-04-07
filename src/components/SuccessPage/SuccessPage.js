import React from 'react';
import greatSuccessGif from '../../../public/img/great-success.gif'

const SuccessPage = ({ feature }) => (
  <div className="animated fadeIn">
    <p>
      Your {feature} has been submitted. Please wait for a
      confirmation email.
    </p>
    <img src={greatSuccessGif} />
  </div>
);

export default SuccessPage;