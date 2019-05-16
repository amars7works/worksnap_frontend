import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import  './Employee.css';

import axios from 'axios'

export class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            startDate:new Date(),
            posts:[],

        }
    }

    handleChange = ({ startDate}) => {
        startDate = startDate || this.state.startDate;
    
        // if (isAfter(startDate, endDate)) {
        //    startDate;
    
        this.setState({ startDate });
      };
    
      handleChangeStart = startDate => this.handleChange({ startDate });
      
componentDidMount(){
  const config = {
      url: "/api/get_emp_list/",
      method: 'GET',
      withCredentials: true,

  }
  axios(config)
  .then((res) => {
      this.setState({
          posts: res.data
      });
          // this.setState({personDetails: data.return[0], loading:false });

      console.log(res.data)
  });
  
}

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
          <div className="row">
          <div className="col-md-6">

          <h3>Total Employees</h3>
          </div>
          <div className="col-md-6">

          <DatePicker 

          
                       className="datepicker" 
                        name = "range1"
                        ref="range1"
                        id="range1"
                        value={this.state.data_start} 
                        placeholderText="Click to select a date"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        onChange={this.handleChangeStart}
                    // dateFormat="MM/DD/YYYY"
                    />
          </div>  
          </div>        

          </div>
          <div className="col-md-6 col-sm-12">
          <Nav variant="tabs" className="justify-content-end" defaultActiveKey="/home">
                <Nav.Item>
                <Nav.Link href="/total">Total</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/Off_today">Off today</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2">Work from home</Nav.Link>
                </Nav.Item>
                
          </Nav>
         </div>
         </div>

     
      </div>
    )
  }
}

export default Header
