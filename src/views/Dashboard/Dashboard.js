import React, { Component } from 'react';
import PromoSubmitter from '../../components/PromoSubmitter/PromoSubmitter';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <p>Hello World!</p>
        <PromoSubmitter />
      </div>
    )
  }
}

export default Dashboard;
