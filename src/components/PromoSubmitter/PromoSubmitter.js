import React, { Component } from 'react';

class PromoSubmitter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A mesage was submitted to nowhere: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h4>Promotion Submitter</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            ASIN:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Author First Name:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Author Last Name:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Email:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Author Biography:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Start Date:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            End Date:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Title:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Amazon URL:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Description:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Cover: <em>*Can't do this yet*</em>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            # reviews: *
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Review Avg:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Regular Price ($):*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Current Price ($):*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Genre:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Website:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Press Release:*
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default PromoSubmitter;