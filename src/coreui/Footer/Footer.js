import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>
          <a href="http://wisefoxpub.com/">Wise Fox</a> &copy; 2018 Redbeard.
        </span>
        <span className="ml-auto">
          Powered by <a href="http://wisefoxpub.com/">Wise Fox!</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
