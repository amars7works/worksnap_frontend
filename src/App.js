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
import NotFound from './pages/Page404'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      AppAdminAuthenticated: false,
      staffAdminAuthenticated: false,
      staffAuthenticated: false,
      loggedIn: false,
      pageNotFound: false,
    };
  }

  handleAdminRoutes() {
    return(
      <Router>
        <Route exact path='/frd/approve/' component={Approval} />
        <Route exact path='/frd/employee/' component={Employees} />
        <Route exact path='/frd/employees/' component={Employee} />
        <Route path="" component={NotFound} />

      </Router>
    )
  }

  handleStaffRoutes() {
    return (
      <Router>
      
        <Route exact path='/frd/emp/report/' component={EmployeeReport}  />
        <Route exact path='/frd/requests/' component={Total} />
        <Route exact path='/frd/dailyreport/' component={Dailyreport} />
        <Route path="" component={NotFound} />

      </Router>
    )
  }

  handleLoggedOutRoutes() {
    return (
      <Router>
          

          <Route exact path='/frd/sign_in' component={Login} />
          <Route exact path='/' render={() => (<Redirect to="/frd/sign_in/" />)} /> 

      </Router>
    )
  }
  // handleNotFound(){
  //   return(
  //     <Router>
  //          <Route component={NotFound} />
  //     </Router>
  //   )
  // }

  render() {   
    return (
      <div className="App">

         {/* {!this.state.pageNotFound && this.handleNotFound()} */}

        {!this.state.loggedIn && this.handleLoggedOutRoutes()}

        {this.state.staffAuthenticated && this.handleStaffRoutes()}

        {this.state.AppAdminAuthenticated && this.handleAdminRoutes()}
        
      </div>)
  }
}

export default App;
