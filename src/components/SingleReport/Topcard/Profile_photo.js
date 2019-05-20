import React, { Component } from 'react';
import Flower from './Flower.jpeg';
import './Profile_photo.css';
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
           
              user_name:user_name,
              
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
      this.state.users.map((value, index) => {
         users_photos.push(
          <div>
            
              <div className = "profile-photo">
                <div className="Photo">
                  <img src={Flower} alt="Flower" className="image" />
                  <p className="name">
                      <li key={index}>{this.state.user_name}</li>
                     

                  </p>
                  <p className="designation">Web developer</p>
                </div>
              </div>
              
          </div>
          )
        }
        )

    return (
      <div>
    
     {users_photos[0]}
    

      </div>
    )
}
}
export default Profile_photo;
