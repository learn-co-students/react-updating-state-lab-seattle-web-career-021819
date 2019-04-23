// Code DigitalClicker Component Here


import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked:0
    }
  }

  handleClick = () => {
    this.setState(prevState=>({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;






// In the components/DigitalClicker.js file, create a DigitalClicker React component.
//
// This component has an initial state property called timesClicked, which is initially defined as 0.
//
// The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
//
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
