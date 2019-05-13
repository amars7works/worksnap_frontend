import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Total from './components/Leave/Total';
import Approval from './components/Admin/Approval';
import Login from './pages/Login'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
	  <Route exact path='/frd/sign_in' component={Login} />
	  <Route exact path='/' render={() => (<Redirect to="/frd/sign_in/" />)} />
          <Route exact path='/frd/requests/' component={Total} />
          <Route exact path='/frd/approve/' component={Approval} />
        </Router>
      </div>)
  }
}

export default App;
