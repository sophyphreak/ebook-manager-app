import React from 'react';
import ReactQuill from 'react-quill';
import {
  Col,
  Row
} from 'reactstrap';

export default class QuillPlayground extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  render() {
    return (
      <Row>
        <Col sm="6"> 
          <ReactQuill 
            value={this.state.text}
            onChange={this.handleChange} 
          />
        </Col>
        <Col sm="6">
          <textarea
            className="ql-editor textarea"
            value={this.state.text}
          />
        </Col>
      </Row>
    )
  }
};