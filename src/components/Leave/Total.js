import React, { Component } from 'react'
import Leave from './Leave';
import Works from './Works';
import Nightshift from './Nightshift';
import Requestsent from './Requestsent';

class Total extends Component {
  render() {
    return (
      <div>
        <div className ="col-md-4 leaverequest" style={{borderRadius:'2px solid black'}}>
    <Leave/>
    <br/>
    <br/>
    <br/>
    <Works/>
    <br/>
    <br/>
    <br/>
    <Nightshift/>
    </div>

    <br/>
    <div className = "col-md-4 sentstauts">
    <Requestsent/>

      
    

    </div>
      </div>
    )
  }
}

export default Total
