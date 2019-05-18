import React, { Component } from 'react';
import Flower from './Flower.jpeg';
import './Employee.css';
import Nav from 'react-bootstrap/Nav';
const axios = require('axios');

export class Profile_photo extends Component {
  constructor(props){
    super(props);
      this.state={
        user_name:'',
        users:[],
       
   };   

}

    componentDidMount(){
      const config = {
      url:"/api/summary_report/",
      method: 'GET',
      withCredentials: true,
      }
      axios(config)
      .then((res) => {
          this.setState({
           
             users_data:res.data,
              
                       });
          

       var users=[];
          for (let [key,value] of Object.entries(res.data)){
           
            users.push(key)
            this.setState({
              users:users,
            })
          }
                            
      });

}
  render() {
    
      
    let users_photos=[]
      {this.state.users.map((value, index) => {
         users_photos.push(
          <div>
            <a href={'/frd/emp/report?user_name='+value}>
              <div className = "profile-photo">
                <div className="Photo">
                <img src={Flower} alt="Flower" className="image" />
                <p className="name">
                  <li key={index}>{value}</li>
                </p>
                <p className="designation">Web developer</p>
                </div>
              </div>
            </a>
          </div>
          )
        }
        )
      }
    return (   
      <div>
        <div className = "Navbar">
          <nav class="navbar navbar-expand-lg navbar-light" >
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">

                <li class="nav-item">
                  <a class="navbar-brand" href="#">Total Employees</a>
                          </li>
                <li class="nav-item">
                <input type ="date" id ="topcard-from-date" className="input_date" />
                </li>
               
                <li>
                <a  href="#" >Total</a>
                </li>
                <li >
                <a  href="#" >Off day</a>
                </li>
                <li >
                <a  href="#" >work for home</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {users_photos}
      </div>
      )
  }
}

export default Profile_photo;
