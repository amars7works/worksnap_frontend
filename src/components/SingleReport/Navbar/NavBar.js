import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import isAfter from "date-fns/isAfter";
import 'font-awesome/css/font-awesome.min.css';
import Flower from './Flower.jpeg';
import '././Navbar.css';

export class NavBar extends Component {
  render() {
    return (
      <div className = "Navbar">
      <nav class="navbar navbar-expand-lg navbar-light" >
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
      <li class="nav-item">
      <a class="navbar-brand" href="#">Worksnap Report</a>
      </li>
      <li class="nav-item">
      From:<input type ="date" id ="topcard-from-date" className="input_date" />
      </li>
      <li class="nav-item">
      To:<input type ="date" id ="topcard-to-date" className="input_date"/>
      </li>
    
      <li class="nav-item">
      <a class="nav-link " href="#" >This month</a>
      </li>
    </ul>
  </div>
</nav>

      </div>
    )
  }
}


export default NavBar
