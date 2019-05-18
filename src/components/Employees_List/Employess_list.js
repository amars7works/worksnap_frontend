import React, { Component } from 'react'
import Header from './Header';
import Employees from './Employees';
import Off_today from './Off_today';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export class Employess_list extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <Route exact path='/frd/Off_today/' component={Off_today} />
          <Route exact path='/frd/employee/' component={Employees} />
        </Router>
      </div>
    )
  }
}

export default Employess_list
