import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Logo from './Logo.jpg';
import '../../styles/TopNav.css';
import Flower from './Flower.jpeg';
// import axios from 'axios';
const axios = require('axios');

export class TopNav extends Component {
   constructor(props){
    super(props);
      this.state={
        user_name:'',
     };
   }
    componentDidMount(){
      let user_name = window.location.search.split('=')[1]
      user_name = user_name.replace(/%20/g,' ');
      const config = {
     url:"/api/summary_report/",
      method: 'GET',
      withCredentials: true,
      }
      axios(config)
      .then((res) => {
          this.setState({

              user_name:res.data[user_name]['Name'],
              // user_name:res.data['Suraj Kumar M']['Name'],
          });
      });

}
  render() {
    return (
      <div className ="Topnavbar">
         <div className ="main-topleftbar">
          <div className="fa_as" id = "threelines">
            <i class="fa fa-bars fa-2x"  aria-hidden="true" ></i>
          </div>
          <div className = "logo-img">
            <img src={Logo} alt="image"  className="logo" /> 
          </div>
        </div>

  <div class = "right-maintopdiv">
  <ul className ="right-topnavbar">
      <li class="nav-item search-li">
      <input type="text" class="form-control " placeholder="Search employees" class="fa fa-search search-text"/>
            {/* <i class="fa fa-search form-search-icon"></i> */}
      </li>

      <li class="nav-item">
        <i class="fa fa-bell" ></i> 
      </li>

      <li class="nav-item">
      <img src={Flower} alt="Flower" className="image_a"/>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" >{this.state.user_name}</a>
      </li>

    </ul>
    </div>
  </div>

  )
  }
}

export default TopNav;
