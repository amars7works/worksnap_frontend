import React, { Component } from 'react'
import {Button,Modal, ModalFooter} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import isAfter from "date-fns/isAfter";
// import {Input} from 'reactstrap';

const axios = require('axios');
export class Nightshift extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.selectOptions= this.selectOptions.bind(this)
        this.textarea=this.textarea.bind(this)
        this.handleChangeStart = this.handleChangeStart.bind(this)
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.leaveRequestStatus =this.leaveRequestStatus.bind(this)
    
        this.state = {
          show: false,
          // selected_option:"",
          textarea_text:"",
          startDate:'' ,
          endDate: '',
          leaveRequestStatus:"Night Shift Request",

        };
      }

      handleChange = ({ startDate, endDate }) => {
        startDate = startDate || this.state.startDate;
        endDate = endDate || this.state.endDate;
    
        // if (isAfter(startDate, endDate)) {
        //   endDate = startDate;
        // }
        //console.log(startDate, endDate)
        this.setState({ startDate, endDate });
      };
    
      handleChangeStart = startDate => this.handleChange({ startDate });
    
      handleChangeEnd = endDate => this.handleChange({ endDate });  
     
      handleSubmit(e) { 
      
        e.preventDefault();
       
        //console.log(this.state.leaveRequestStatus);
        if(this.state.selected_option===""){
            alert("please filed the select field")
            }
            else if(this.state.textarea_text ==="" ){
            alert("please filed the select area")
            }
           
            else{
             let leave_request_data ={
                    typeof_leave:this.state.selected_option,
                    apply_reason:this.state.textarea_text,
                    leave_start_data:this.state.startDate,
                    leave_end_data:this.state.endDate,
                    Type_of_Request:this.state.leaveRequestStatus
             }
           console.log("leaverequestdata",leave_request_data.requestType)
           
             
              axios({
                method: 'post',
                url: 'http://worksnaps.s7works.io/apply_leave/',
                data:[leave_request_data]
                
              })
              .then(function (response) {
                console.log(response);
              })
              
            }
            if(this.handleSubmit===this.handleClose){

            }
    }
   
    textarea(e){
        this.setState({
            textarea_text:e.target.value,
        })
    }
    leaveRequestStatus(){
      this.setState({
        leaveStatusMessage: "Night Shift Request"  
      })
    }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

  render() {
    return (
      <div>
        <Button className="col-md-11" style={{backgroundColor:'#4796BC', borderColor:'#4796BC', height:'70px',textAlignLast:"Right",padding:'25px',borderRadius:'15px',fontSize:'20px'}} onClick={this.handleShow}>
        Night Shift Request
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Night Shift Request</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleSubmit} onReset={this.handleSubmit}>

          <Modal.Body>
          <div className="row">
            
            <div className="col-md-10 mt-2">
                
                 <div className="form-group row mt-2">
                    <div className="col-md-6">
                    
                    <span>from:</span>
                    
                    <DatePicker 
                       className="form-control" 
                        name = "range1"
                        ref="range1"
                        id="range1"
                        value={this.state.data_start} 
                        placeholderText="Click to select a date"
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    // dateFormat="MM/DD/YYYY"
                      />
                    </div>
                    <div className="col-md-6">
                    <span className>To: </span>
                    <DatePicker    
                        className="form-control"   
                        style={{paddingright:'0px',paddingleft: '33px'}}
                        ref="range"
                        name = "range"
                        id = "range"
                        value={this.state.data_end} 
                        placeholderText="Click to select a startdate"
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        //  dateFormat="MM/DD/YYYY"
                    />
                    </div>

                    </div>
                 
                    <textarea className="form-control" 
                 id="exampleTextarea" rows="3"
                 placeholder="Enter The Reason"
                 onChange={this.textarea}
                 value={this.state.textarea_text}
                 >
                 </textarea>

                 <br/>
                 <br/>
                 <br/>


                 {/* <div className="col-md-5 leavestatus">
                  <h5 className = "text-bold"> </h5>
                  <p>Leave Application</p> 
                  <span style={{fontSize:'12px'}} 
                  data={this.state.posts} 
                  value = {this.status}
                   onChange ={this.leaveRequestStatus}> pending </span>
                
                </div> */}
                
                
                
                
            </div>
           
        </div>
          </Modal.Body>
          <ModalFooter>
            <Button variant="secondary" style={{borderRadius:'20px'}} onClick={this.handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-success form-control col-sm-2" onClick={(e) => this.props.Clicked("pending")} style={{borderRadius:'20px'}} >Submit</button>
          </ModalFooter>
            </form>

        </Modal>

      </div>
    )
  }
}

export default Nightshift
