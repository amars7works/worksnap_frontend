import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Total from './components/Leave/Total';
import Approval from './components/Admin/Approval';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/frd/requests/' component={Total} />
          <Route exact path='/frd/request_approve/' component={Approval} />
        </Router>
      </div>)
  }
}

export default App;
