import React from 'react';
import ReactQuill from 'react-quill';
import {
  Col,
  Row
} from 'reactstrap';

export default class HtmlGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ text: value })
  }
  render() {
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], 
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],    
        ['link'],
        ['clean']
      ],
    };
    return (
      <Row>
        <Col xs="12" sm="6">
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Please type or paste your listing here"
            modules={modules}
          />
        </Col>
        <Col xs="12" sm="6">
          <textarea
            className="ql-editor--textarea"
            value={this.state.text}
          />
        </Col>
      </Row>
    );
  }
}