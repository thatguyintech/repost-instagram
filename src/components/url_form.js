import React from 'react';

export class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagramUrl: '',
      pictureId: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ instagramUrl: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    console.log("url submitted:", this.state.instagramUrl);
    event.preventDefault();
    let pattern = /p\/(.+)\//;
    var matches = pattern.exec(this.state.instagramUrl);

    this.setState({ pictureId: matches[1] })
  }

  render() {
    const pictureUrl = `https://api.instagram.com/p/${this.state.pictureId}/media?size=l`;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.instagramUrl}
              onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <img src={pictureUrl} />
        <form method="get" action={pictureUrl}>
          <button type="submit">Download!</button>
        </form>
      </div>
    );
  }
}
