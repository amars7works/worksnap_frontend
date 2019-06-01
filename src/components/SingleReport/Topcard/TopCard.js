import React, { Component } from 'react'
import './Topcard.css';
import Profile_photo from './Profile_photo';
// import { Redeem } from 'material-ui-icons';
const axios = require('axios');
class TopCard extends Component {

constructor(props){
    super(props);
      this.state={
        user_name:'',
   
    no_of_days_worked:null,
    no_of_working_days:null,
    total_time_to_work:null,
    total_time_worked:null,
    users:[]
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
              
        no_of_days_worked:parseInt(res.data[user_name]['No of days worked']),
        no_of_working_days:parseInt(res.data[user_name]['No of working days']),
        total_time_to_work:parseInt(res.data[user_name]['Total time to work']),
        total_time_worked:parseInt(res.data[user_name]['Total time worked']),


      
    });
     
});

}
  render() {
         
    return (

        <div>
            <div className = "profile-left">
             <Profile_photo /> 
             </div>  
           
        {/* <div className="card_row"  style={{background:'#FA7746'}}>
      
            <div className="col-md-3 sx-light">
           
           Total Working days
             <p className="Number">{this.state.no_of_working_days}</p>
                   
      
           </div>
            <div className="col-md-3">
          
                Total days worked
               <p className="Number">{this.state.no_of_days_worked}</p>
            </div>
            <div className="col-md-3" >
                Hours worked
                <p className="Number">{this.state.total_time_to_work}</p>
            </div>
            <div className="col-md-3">
                Average day Hours
                <p className="Number">{this.state.total_time_worked}</p>
            </div>
        </div> */}
        <div class="card-group CardSetting">
  <div class="card bg-primary">
    <div class="card-body text-center">
      <p class="card-text ">  Total Working days</p>
      <p className="Number">{this.state.no_of_working_days}</p>

    </div>
  </div>
  <div class="card bg-warning">
    <div class="card-body text-center">
      <p class="card-text">Total days worked</p>
      <p className="Number_b">{this.state.no_of_days_worked}</p>
    </div>
  </div>
  <div class="card bg-success">
    <div class="card-body text-center">
      <p class="card-text">Total Hours worked</p>
      <p className="Number">{this.state.total_time_to_work}</p>
    </div>
  </div>
  <div class="card bg-danger">
    <div class="card-body text-center">
      <p class="card-text">Average day Hours</p>
      <p className="Number">{this.state.total_time_worked}</p>
    </div>
  </div> 
</div>

  </div>
      


    
    )
  }
}

export default TopCard;
