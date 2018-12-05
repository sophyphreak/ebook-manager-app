import React, { Component } from 'react';

import SalesComponent from '../../views/SalesComponent/SalesComponent';

export default class SalesEstimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bsr: '',
      kindleOrPrint: 'Kindle book',
      sales: ''
    };
    this.onBsrChange = this.onBsrChange.bind(this);
    this.onKindleOrPrintChange = this.onKindleOrPrintChange.bind(this);
  }

  onBsrChange(e) {
    const bsr = e.target.value;
    const sales = bsr && Math.round(10023 / bsr);
    if (!bsr || bsr.match(/^[1-9][0-9]*$/)) {
      this.setState(() => ({ bsr, sales }));
    }
  }

  onKindleOrPrintChange(e) {
    const kindleOrPrint = e.target.value;
    this.setState(() => ({ kindleOrPrint }));
  }

  render() {
    const { bsr, kindleOrPrint, sales } = this.state;

    return (
      <SalesComponent
        bsr={bsr}
        kindleOrPrint={kindleOrPrint}
        sales={sales}
        onBsrChange={this.onBsrChange}
        onKindleOrPrintChange={this.onKindleOrPrintChange}
      />
    );
  }
}
