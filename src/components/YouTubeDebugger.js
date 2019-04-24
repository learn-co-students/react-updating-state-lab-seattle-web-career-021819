import React, {Component} from 'react';

export default class YouTubeDebugger extends React.Component{

  constructor(props){
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

  onBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  onResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }

    })
  }

  render(){
    return <div>
            <button className='bitrate' onClick={this.onBitrate}> </button>
            <button className='resolution' onClick={this.onResolution}> </button>
            </div>
  }

}
