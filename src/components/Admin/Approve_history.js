import React, { Component } from 'react'
import {Button,ButtonToolbar,Modal} from 'react-bootstrap';
import moment from 'moment';
import "./Approval.css"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios'


const MAX_ITEMS = 4;

export class Approve_history extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
            isOpen:false,
            startDate: new Date(),

            smShow: false,
             
        }
        
        
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

    componentDidMount(){
        const config = {
            url: "/api/leave_approved_list/",
            method: 'GET',
            withCredentials: true,
    
        }
        axios(config)
        .then((res) => {
            this.setState({
                posts: res.data
            });
    
            // console.log(res.data)
        });
        
    
    }

  render() {
    let smClose = () => this.setState({ smShow: false });

    return (
      <div>
          <div className="container">
        <div className="col-md-12 Approve_history" >
       <div className="history_header">
       <div className="row">
       <div className="header_name col-md-8 col-xs-6">
       <h5 className="leave_history_title">Leave Approved History</h5>
       </div>
       <div className="datepick">
       <DatePicker 
                       className="Date-Picker" 
                        name = "range1"
                        ref="range1"
                        id="range1"
                        value={this.state.data_start} 
                        placeholderText="Click to select a date"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        onChange={this.handleChangeStart}
                    />
       </div>
       </div>
       </div>

       <div>

       { this.getRenderedItems().map(post => 
               
    <div className="history">
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

export default Approve_history
