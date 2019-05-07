import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Total from './components/Leave/Total';
import Approval from './components/Admin/Approval';

function App() {
  return (
    <div className="App">
       <Router>
        <Route exact path='/frd/leave_request/' component={Total} />
        <Route exact path='/frd/leave_approval/' component={Approval} />
      </Router>


    </div>
  );
}

export default App;