import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import  './EmployeeList.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card} from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'


export class EmployeeList extends Component{
	    constructor (props) {
    super(props)
    this.state = {
      selected_date:'',
      selected:'',
      array:[],
    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(date) {
    this.setState({
      selected_date:date,
      // selected:date,
    })
  }
 

componentDidMount(){
  const config = {
      url: "/api/present_or_leave_list/",
      method: 'GET',
      withCredentials: true,
      params:{
        // date:moment(this.state.selected_date).format('YYYY-MM-DD'),
        date:moment().format('YYYY-MM-DD'),
          
     },

  }
  axios(config)
  .then((res) => {
      this.setState({
        array: res.data,
         
      });

      console.log(res.data )
      console.log(typeof(date))
     
     
  });
  
}

  
    
  
	render(){
		return(
			<div>            	
           <label className="label_design">Select Date: </label>
            <DatePicker
              className="date_design"
              selected={ this.state.selected_date }
              onChange={ this.handleChange }
              dateFormat="YYYY-MM-dd"
              // dayClassName={date => getDate(date) < Math.random() * 31 ? 'random' : undefined} />
              />
             

             
         	
     <div>
  
				
<table className="table table_design table-bordered" style={{float:"left"}}>
  <tr>
  
    <th>Employee Name</th>
    <th>Attendence (Leave/Present)</th>
    <th>Working hours on that day</th>
  </tr>
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


			)
	}
}
export default EmployeeList;