// Code YouTubeDebugger Component Here

import React, {Component} from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
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

  handleClickBitrate = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate:12
      }
    })
  }

  handleClickResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleClickBitrate}>Bitrate
        </button>

        <button className="Resolution" onClick={this.handleClickResolution}>Resolution
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger;
