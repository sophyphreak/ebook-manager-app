import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'draft-wysiwyg';
import { html as beautify } from 'js-beautify'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClippyIcon } from 'react-octicons';
import {
  Col,
  Input,
  Row,
} from 'reactstrap';

export default class DraftDragnDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState(() => ({ editorState }));
  };

  render() {
    const { editorState } = this.state;
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    return (
      <Row className="animated fadeIn">
        <Col xs="12" sm="6">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbarClassName="demoo-toolbar"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Col>
        <Col xs="12" sm="6">
          <Input
            type="textarea"
            value={beautify(markup)}
            className="demo-editor--textarea"
            readOnly={true}
          />
          {
            markup.length > 10 &&
            <CopyToClipboard
              className="fadeIn animated"
              text={beautify(markup)}
            >
              <button><ClippyIcon /></button>
            </CopyToClipboard>
          }
        </Col>
      </Row>
    )
  }
}
