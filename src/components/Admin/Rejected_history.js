import React, { Component } from 'react';
import {Button,ButtonToolbar,Modal} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "./Approval.css";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

const MAX_ITEMS = 4;

//To check the Rejected history Status in Employer Page

export class Rejected_history extends Component {
    constructor(props) {
        super(props);

        this.state ={
            posts:[],
            isOpen:false,
            selected_date: new Date(),

            smShow: false,
             
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(leave_start_date) {
      this.setState({
         selected_date:leave_start_date,
        // selected:date,
        // startDate: new Date(),
      
      })
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      getRenderedItems() {
        if (this.state.isOpen) {
          return this.state.posts;
        }
        return this.state.posts.slice(0, MAX_ITEMS);
      }

   
  fetchRejectListData(){
    //  console.log("selected date is: ",this.state.selected_date)
    const config = {
      url: "/api/leave_rejected_list/",
      method: 'GET',
      withCredentials: true,
      params:{
     
        leave_start_date:moment(this.state.startDate).format('YYYY-MM-DD')
          
     },
  
  }
  axios(config)
  .then((res) => {
      this.setState({
        posts: res.data,
         
      });
  
  });
   }
  
  componentDidMount(){
    
    this.fetchRejectListData()
  }
  render() {
    let smClose = () => this.setState({ smShow: false });

    return (          
      <div>
      <div className="container">

        <div className="col-md-12 Rejected_history" >
       <div className="history_header">
       <div className="row">

            <div className="header_name col-md-8 col-xs-6">
            <h5 className="leave_history_title">Leave Rejected History</h5>

            </div>
            <div className="datepick">
            <DatePicker 
                            // className="Date-Picker" 
                            //     name = "range1"
                            //     ref="range1"
                            //     id="range1"
                            //     value={this.state.data_start} 
                            //     placeholderText="Click to select a date"
                            //     selected={this.state.startDate}
                            //     selectsStart
                            //     startDate={this.state.startDate}
                            //     // onChange={this.handleChangeStart}
                            //     onChange={this.handleChange}

                                selected={ this.state.selected_date }
                                onChange={ this.handleChange }
                                dateFormat="YYYY-MM-dd"
          
                            />

            </div>
       </div>
       </div>
       <div>
       { this.getRenderedItems().map(post => 

            <div className="history">
                {/* <img src="https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg" class="rounded-circle" alt="Cinque Terre"  />  */}
                <h6 className="username" >{post.username}</h6>
                <ButtonToolbar>
                    <Button variant="link" onClick={() => this.setState({ smShow: true })}>
                    View details
                    </Button>
                

                    <Modal
                    size="sm"
                    show={this.state.smShow}
                    onHide={smClose}
                    aria-labelledby="example-modal-sizes-title-sm"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                        View details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>{post.Type_of_Request}</p>

                    {moment(post.leave_start_date).format("MMM Do YYYY") }-{moment(post.leave_end_date).format("MMM Do YYYY")}
                    <p>{post.apply_reason}</p>
                    <p>{post.leave_status}</p>
                    </Modal.Body>
                    </Modal>
                
                </ButtonToolbar>
            </div>
       )}
       <button className="view_all"  onClick={this.toggle}>
          {this.state.isOpen ? 'close' : 'View All'}
        </button>
        </div>
       </div>
       </div>
       </div>
    )
  }
}

export default Rejected_history