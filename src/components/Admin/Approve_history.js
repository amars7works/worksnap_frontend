import React, { Component } from 'react'
import {Button,ButtonToolbar,Modal} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

export class Approve_history extends Component {
    constructor(props) {
        super(props);
        this.state ={
            posts:[],
            
            smShow: false,
             
        }
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
        <div className="col-md-5 Approve_history" >
       <div className="history_header">
       <div className="row">
       <div className="header_name">
       <h4>Approved History</h4>
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
                    // dateFormat="MM/DD/YYYY"
                    />
       </div>
       </div>
       </div>

       { this.state.posts.map(post => 

    <div className="history">
    <h6>{post.username}</h6>
    <ButtonToolbar>
        <Button onClick={() => this.setState({ smShow: true })}>
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

<p>{post.leave_start_date} </p><p> {post.leave_end_date}</p>

<p>{post.apply_reason}</p>
        </Modal.Body>
        </Modal>
    
    </ButtonToolbar>
</div>
)}
       </div>
      </div>
    )
  }
}

export default Approve_history
