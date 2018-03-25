import React from 'react';
import ReactQuill from 'react-quill';

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
      <ReactQuill 
        className="ql-editor"
        value={this.state.text}
        onChange={this.handleChange} 
      />
    )
  }
};