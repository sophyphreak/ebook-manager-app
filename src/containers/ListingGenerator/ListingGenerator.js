import React from 'react';
import ReactQuill from 'react-quill';
import { html as beautify } from 'js-beautify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClippyIcon } from 'react-octicons';
import { Col, Input, Row } from 'reactstrap';

export default class ListingGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    const text = value
      .replace(/<\/?span[^>]*>/g, '')
      .replace(/ class="ql-align-center"/g, '')
      .replace(/ class="ql-align-right"/g, '');
    this.setState({ text });
  }
  getDisplayHtml(text) {
    if (text === '<p><br></p>') {
      return '';
    };
    return beautify(text);
  }
  render({ text } = this.state) {
    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link'],
        ['clean']
      ]
    };
    return (
      <Row className="animated fadeIn">
        <Col xs="12" sm="6">
          <ReactQuill
            value={text}
            onChange={this.handleChange}
            placeholder="Please type or paste your listing here"
            modules={modules}
          />
        </Col>
        <Col xs="12" sm="6">
          <Input
            type="textarea"
            className="ql-editor--textarea"
            value={this.getDisplayHtml(text)}
            readOnly={true}
          />
          {this.state.text.length > 11 && (
            <CopyToClipboard className="animated fadeIn" text={beautify(text)}>
              <button>
                <ClippyIcon />
              </button>
            </CopyToClipboard>
          )}
        </Col>
      </Row>
    );
  }
}
