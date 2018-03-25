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
      text: '',
      width: window.innerWidth
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleWindowSizeChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  };
  handleChange(value) {
    this.setState({ text: value })
  }
  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

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

    if (isMobile) {
      return (
        <div>
          <Row>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              modules={modules}
            />
          </Row>
          <Row>
            <textarea
              value={this.state.text}
            />
          </Row>
        </div>
      );
    } else {
      return(
        <Row>
          <Col xs="12" sm="6">
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              modules={modules}
            />
          </Col>
          <Col xs="12" sm="6">
            <textarea
              className="textarea ql-editor"
              value={this.state.text}
            />
          </Col>
        </Row>
      );
    }
  }
};