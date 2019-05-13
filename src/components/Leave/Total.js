import React, { Component } from 'react'
import Leave from './Leave';
import Nightshift from './Nightshift';
import Requestsent from './Requestsent';
import Works from './Works';

class Total extends Component {
  constructor(props){
    super(props);
    this.state = {
      intialText:"Initial text"
    }
  }
  Clicked =(text) => {
    this.setState({
      intialText: text
    })
}

  render() {
    return (
      <div>
        <div className ="col-md-4 leave-request" style={{borderRadius:'2px solid black'}}>
    <Leave intialText ={this.state.intialText} Clicked = {this.Clicked}/>
    <br/>
    <br/>
    <br/>
    <Works intialText ={this.state.intialText} Clicked = {this.Clicked} />
    <br/>
    <br/>
    <br/>
    <Nightshift intialText ={this.state.intialText} Clicked = {this.Clicked} />
    </div>

    <br/>
    <div className = "col-md-4 sent-status">
    <Requestsent intialText = {this.state.intialText} />
    

    </div>
      </div>
    )
  }
}

export default Total
