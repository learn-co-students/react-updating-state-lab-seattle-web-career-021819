import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.settings,
        bitrate: 12
      }
    })
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.settings,
        video: {
          ...this.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button class="bitrate" onClick={this.bitrateClick}></button>
        <button class="resolution" onClick={this.resolutionClick}></button>
      </div>
  )}
}
