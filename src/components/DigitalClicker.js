import React, {Component} from 'react';

export default class DigitalClicker extends React.Component{

  constructor(props){
    super(props)
    this.state = {timesClicked:0}
  }

  clickHandler = () => {
    let count = this.state.timesClicked + 1
    this.setState({
      timesClicked: count
    })
  }

  render(){
    return <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
  }
}
