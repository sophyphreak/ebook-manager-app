import React from 'react';
import ReactQuill from 'react-quill';
import { html as beautify } from 'js-beautify'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClippyIcon } from 'react-octicons';
import { 
  Button, 
  Col,
  Input, 
  Row 
} from 'reactstrap';

export default class QuillPlayground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    const text = value.replace(/<\/?span[^>]*>/g, "");
    this.setState({ text });
  };
  render() {
    return (
      <Row className="animated fadeIn">
        <Col xs="12" sm="6">
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Please type or paste your listing here"
          />
        </Col>
        <Col xs="12" sm="6">
          <Input
            type="textarea"
            className="ql-editor--textarea"
            value={beautify(this.state.text)}
            readOnly={true}
          />
          {
            this.state.text.length > 11 &&
            <CopyToClipboard 
              className="animated fadeIn"
              text={beautify(this.state.text)}
            >
              <button><ClippyIcon /></button>
            </CopyToClipboard>
          }
        </Col>
      </Row>
    );
  }
}