import React from 'react';
import greatSuccessGif from '../../../public/img/great-success.gif'

const SuccessPage = ({ feature }) => (
  <div>
    <p className="animated fadeIn">
      Your {feature} has been submitted. Please wait for a
      confirmation email.
    </p>
    <img src={greatSuccessGif} />
  </div>
);

export default SuccessPage;