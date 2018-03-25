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
            className="ql-editor"
            value={this.state.text}
            onChange={this.handleChange} 
          />
        </Col>
        <Col>
          <textarea
            className="ql-editor textarea"
            value={this.state.text}
          />
        </Col>
      </Row>
    )
  }
};