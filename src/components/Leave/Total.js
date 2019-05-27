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
 

  render() {
    const { EmployeeNavigation } = this.props
    return (
      <div>
      <EmployeeNavigation />
        <div className ="col-md-4 leave-request" style={{borderRadius:'2px solid black'}}>
    <Leave/>
    <br/>
    <br/>
    <br/>
    <Works/>
    <br/>
    <br/>
    <br/>
    <Nightshift/>
    <br/>
    <br/>
    <br/>
    <br/>

    </div>

    <br/>
    <div className = "col-md-4 sent-status">
    <Requestsent/>
    

    </div>
      </div>
    )
  }
}

export default Total
