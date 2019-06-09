import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import  './EmployeeList.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import moment from 'moment'

//EmployeeList page showing employee name, status and Duration

export class EmployeeList extends Component{
	    constructor (props) {
    super(props)
    this.state = {
      selected_date:new Date(),
      // selected:'',
      array:[],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchLeaveListData = this.fetchLeaveListData.bind(this);
    
  }
  

  handleChange(date) {
    this.setState({
      selected_date:date,
      // selected:date,
    },()=>{
      this.fetchLeaveListData();
    })
  }
  //using URL and Fetch the data  
 fetchLeaveListData(){
  //  console.log("selected date is: ",this.state.selected_date)
  const config = {
    url: "/api/present_or_leave_list/",
    method: 'GET',
    withCredentials: true,
    params:{
   
      date:moment(this.state.selected_date).format('YYYY-MM-DD')
        
   },

}
axios(config)
.then((res) => {
    this.setState({
      array: res.data,
       
    });

});
 }

componentDidMount(){
  
  this.fetchLeaveListData()
}

	render(){
    const { CustomNavigation } = this.props
    return (
      <div>
        <CustomNavigation />
        <div className="container employee-table">

	            	<div>
           <label className="label_design">Select Date: </label> 

            <DatePicker
              // className="date_design"
              selected={ this.state.selected_date }
              onChange={ this.handleChange }
              dateFormat="YYYY-MM-dd"
              style={{float:'left'}}
              // dayClassName={date => getDate(date) < Math.random() * 31 ? 'random' : undefined} />
              />
       </div>
       <label className="label_design_headding">EmployeeList Table  </label>
       {/* // Creating a Table        */}
  <div>
<table className="table table_design table-bordered" style={{float:"left"}}>
 <thead>
     <tr>
     <th>Employee Name</th>
    <th>Attendence (Leave/Present)</th>
    <th>Working hours on that day</th>
  </tr>
 </thead>

  {this.state.array.map(post=>

  <tr>
   <td>{post.user_name}</td>
    <td>{post.status}</td>
    <td>{post.duration}</td>
     </tr>
   
  )}
 
</table>
				</div>
			</div>
      </div>



			)
	}
}
export default EmployeeList;