import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Total from './components/Leave/Total';
import Approval from './components/Admin/Approval';
import Login from './pages/Login';
import EmployeeReport from './pages/EmployeeReport';
import Employee from './components/Employee/Employee';
import Dailyreport from './components/Dailyreport/Dailyreport'
import Employees from './components/Employees_List/Employess_list'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
	  <Route exact path='/frd/sign_in' component={Login} />
	  <Route exact path='/' render={() => (<Redirect to="/frd/sign_in/" />)} />
	  <Route exact path='/frd/emp/report/' component={EmployeeReport}  />
        <Route exact path='/frd/requests/' component={Total} />
        <Route exact path='/frd/approve/' component={Approval} />
        <Route exact path='/Employee/' component={Employee} />
    
          <Route exact path='/frd/dailyreport/' component={Dailyreport} />
          <Route exact path='/frd/employee/' component={Employees} />
        </Router>

      </div>)
  }
}

export default App;
