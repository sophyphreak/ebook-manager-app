import React, { Component } from 'react';

import SalesComponent from '../../components/SalesComponent/SalesComponent';

export default class SalesEstimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bsr: '',
      sales: ''
    };
    this.onBsrChange = this.onBsrChange.bind(this);
  }

  onBsrChange(e) {
    const bsr = e.target.value;
    const sales = bsr && Math.round(10023 / bsr);
    if (!bsr || bsr.match(/^[1-9][0-9]*$/)) {
      this.setState(() => ({ bsr, sales }));
    }
  };

  render() {
    const {
      bsr,
      sales
    } = this.state;
    
    return( 
      <SalesComponent 
        bsr={bsr}
        sales={sales}
        onBsrChange={this.onBsrChange}
      />
    );
  };
};