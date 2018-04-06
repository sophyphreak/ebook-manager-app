import React, { Component } from 'react';
import nothingToSeeGif from '../../../public/img/nothing-to-see-here.gif';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <h4>Your Dashboard</h4>
        <img src={nothingToSeeGif} />
      </div>
    )
  }
}

export default Dashboard;
