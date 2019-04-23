// Code DigitalClicker Component 
import React, {Component} from 'react'

class DigitalClicker extends Component{
     constructor(){
          super()
          this.state={
               timesClicked: 0,
          };
     }

     onButtonClick=e=>{
          const newClicks=this.state.timesClicked + 1;
          this.setState({
               timesClicked: newClicks
          })

     }



     render(){
          return(
               <button onClick={this.onButtonClick}>
                    {this.state.timesClicked}
               </button>
          )
     }

}

export default DigitalClicker;