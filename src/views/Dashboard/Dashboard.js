import React, { Component } from 'react';
import DiffChecker from '../../components/DiffChecker/DiffChecker';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <DiffChecker />
      </div>
    )
  }
}

export default Dashboard;
