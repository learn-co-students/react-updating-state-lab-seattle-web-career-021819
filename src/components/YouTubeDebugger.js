// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
class YouTubeDebugger extends Component{
     constructor(){
          super()
          this.state={
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

     onBitrateClick=e=>{
          this.setState({
               settings: {
                    ...this.state.setings,
                    bitrate: 12
               }

          })

     }

     onResolutionClick=e=>{
          this.setState({
               settings: {
                    ...this.state.setings,
                    bitrate: 12
               },
               video:{
                    ...this.state.settings.video,
                    resolution: '720p'
               }

          })
          
     }

     render(){
          return (
               <div>
                    <button className='bitrate' onClick={this.onBitrateClick}>
                         bitrate
                    </button>
                    
                    <button className='resolution' onClick={this.onResolutionClick}>
                         resolution
                    </button>
               </div>
          );
     }

}

export default YouTubeDebugger;
