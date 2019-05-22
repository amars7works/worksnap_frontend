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
//import NotFound from './pages/Page404'
import axios from 'axios';

function authStatus() {
  const config = {
    url: '/api/auth_status/',
    method: 'GET',
    withCredentials: true 
  }
  return axios(config);
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      AppAdminAuthenticated: false,
      staffAdminAuthenticated: false,
      staffAuthenticated: false,
      loggedIn: false,
      pageNotFound: false
    };
  }

  async componentDidMount() {
    authStatus().then((response) => {
      if(response.data.user_status) {
        if(response.data.is_superuser) {
          this.setState({loggedIn: true, AppAdminAuthenticated: true})
        } else {
          this.setState({loggedIn: true, staffAuthenticated: true})
        }
      } else {
        this.setState({
          AppAdminAuthenticated: false,
          staffAdminAuthenticated: false,
          staffAuthenticated: false,
          loggedIn: false
        })
      }
    })
  }

  

  handleAdminRoutes() {
    return(
      <Router>
        <Route exact path='/frd/emp/report/' component={EmployeeReport}  />
        <Route exact path='/frd/approve/' component={Approval} />
        <Route exact path='/frd/employee/' component={Employees} />
        <Route exact path='/frd/employees/' component={Employee} />
        <Route exact path='/' render={() => (<Redirect to="/frd/employees/" />)} /> 
        {/* <Route path="" component={NotFound} /> */}

      </Router>
    )
  }

  handleStaffRoutes() {
    return (
      <Router>
        <Route exact path='/frd/requests/' component={Total} />
        <Route exact path='/frd/dailyreport/' component={Dailyreport} />
        <Route exact path='/' render={() => (<Redirect to="/frd/emp/requests/" />)} /> 
        {/* <Route path="" component={NotFound} /> */}

      </Router>
    )
  }

  handleLoggedOutRoutes() {
    return (
      <Router>
          <Route exact path={'/frd/sign_in'} component={Login} />
          <Route exact path='/' render={() => (<Redirect to="/frd/sign_in/" />)} /> 
          {/* <Route exact path="" component={NotFound} /> */}
      </Router>
    )
  }

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