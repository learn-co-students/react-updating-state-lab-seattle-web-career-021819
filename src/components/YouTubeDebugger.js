import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  bitrateClick = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resClick = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClick}>
          Bitrate +
        </button>
        <button className="resolution" onClick={this.resClick}>
          Resolution +
        </button>
      </div>
    )
  }
}
