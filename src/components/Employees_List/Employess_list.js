import React, { Component } from 'react'
import Header from './Header';
import Employees from './Employees';

export class Employess_list extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Employees/>
        
      </div>
    )
  }
}

export default Employess_list
