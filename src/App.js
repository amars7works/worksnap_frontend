import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Total from './components/Leave/Total';
import Approval from './components/Admin/Approval';
import Login from './pages/Login';
import EmployeeReport from './pages/EmployeeReport';
import Employee from './components/Employee/Employee';
import Dailyreport from './components/Dailyreport/Dailyreport'
import Employees from './components/Employees_List/Employess_list'
//import NotFound from './pages/Page404'
import { EmployerAuthRoute, EmployeeAuthRoute, PublicRoute } from "./components/SimplifiedAuthRoute"; 


class App extends React.Component {

  render() {   
    return (
      <div className="App">

      <Router>
        <Switch>
          {/* Employee routes */}
          {/* <EmployeeAuthRoute exact path='/frd/requests/' component={Total} /> */}
          <EmployeeAuthRoute exact path='/frd/dailyreport/' component={Dailyreport} />

          {/* Employer routes */}
          <EmployerAuthRoute exact path='/frd/requests/' component={Total} />
          <EmployerAuthRoute exact path='/frd/emp/report/' component={EmployeeReport}  />
          <EmployerAuthRoute exact path='/frd/employee/' component={Employees} />
          <EmployerAuthRoute exact path='/frd/employees/' component={Employee} />
          <EmployerAuthRoute exact path='/frd/approve/' component={Approval} />

          {/* Public routes */}
          <PublicRoute exact path='/frd/sign_in' component={Login} />
          <Route exact path='/' render={() => (<Redirect to={{ pathname: "/frd/sign_in/" }} />)} />
        </Switch>
      </Router>
        
      </div>)
  }
}

export default App;